import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from 'axios'
import { useAuth } from "hooks/useAuth";
import { BiWallet } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { UserContainer, Avatar } from "./styles";

export function UserInfo() {
  const { push } = useHistory()
  const { user } = useAuth()
  const [wallet, setWallet] = useState<number>(0)

  // const wallet = JSON.parse(localStorage.getItem("eBizno.wallet") as string);

  const money = wallet.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });

  function formatName() {
    const nameSplit = user.FirstName.split(" ");

    if (nameSplit.length > 1) {
      return `${nameSplit[0].charAt(0)}${nameSplit[1].charAt(0)}`.toUpperCase();
    }
    return nameSplit[0].charAt(0).toUpperCase();
  }

  function signOut() {
    localStorage.removeItem("eBizno.token");
    localStorage.removeItem("eBizno.user");
    localStorage.removeItem("eBizno.wallet");

    push('/login');
  }

  useEffect(() => {
    async function getWallet() {
      const response = await api.get(`${process.env.REACT_APP_URL_WALLET}/${user.IdUser}`);
      setWallet(response.data)
    }

    getWallet()
  }, [])

  return (
    <UserContainer >
      <div className="d-flex align-items-center" onClick={() => push('/perfil')}>
        <div className="user-info">
          <h4>{user.FirstName} {user.LastName}</h4>
          <small className="user-wallet">
            <BiWallet />
            <span>{money}</span>
          </small>
        </div>
        <Avatar>
          <h2>{formatName()}</h2>
        </Avatar>
      </div>
      <span className="logout" onClick={signOut}><FiLogOut /></span>
    </UserContainer>
  );
}