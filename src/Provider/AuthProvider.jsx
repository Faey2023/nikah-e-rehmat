import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //google signup
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
    setLoading(true);
  };
  //email signup
  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signOut
  const userSignOut = () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.code);
      });
    setLoading(true);
  };
  //auth state change
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const authInfo = {
    loading,
    googleLogin,
    userRegister,
    loginUser,
    user,
    userSignOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
