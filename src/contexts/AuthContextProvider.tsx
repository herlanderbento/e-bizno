import { createContext, ReactNode, useState } from "react";
import axios from 'axios'
import { Redirect, useHistory } from "react-router-dom";

interface IUser {
  IdUser: string;
  FirstName: string;
  LastName: string;
  telephone: string;
  bi: string;
  email: string;
  state: boolean;
}

interface SignInCredentials {
  password: string;
  email: string;
}

interface IAuthState {
  token: string;
  user: IUser;
  wallet: any;
}

interface IAuthContextData {
  user: IUser;
  token: string;
  wallet: any;
  signIn(data: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);


export function signOut() {
  localStorage.removeItem("eBizno.token");
  localStorage.removeItem("eBizno.user");
  localStorage.removeItem("eBizno.wallet");

  <Redirect to={{ pathname: '/login' }} />
}

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("eBizno.token");
    const user = localStorage.getItem("eBizno.user");
    const wallet = localStorage.getItem("eBizno.user");

    if (token && user) {
      return { token, wallet, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  async function signIn(data: SignInCredentials) {
    const response = await axios.post("http://192.168.188.80:2003/user/auth", data);

    const { token, user, wellet: wallet } = response.data;

    localStorage.setItem("eBizno.token", token);
    localStorage.setItem("eBizno.user", JSON.stringify(user));
    localStorage.setItem("eBizno.wallet", wallet);

    setData({
      token,
      user,
      wallet
    });
  }


  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user, token: data.token, wallet: data.wallet, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}