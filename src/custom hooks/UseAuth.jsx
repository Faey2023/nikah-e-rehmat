import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
