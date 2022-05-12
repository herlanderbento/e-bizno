import { AuthContext } from "contexts/AuthContextProvider";
import { useContext } from "react";

export function useAuth() {
  return useContext(AuthContext);
}