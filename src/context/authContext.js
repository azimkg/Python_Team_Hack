import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { firestore, auth } from "../Fire";
import fire from "../Fire";

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");

  function handleLogin(email, password, navigate) {
    setError("");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/chat"))
      .catch((err) => setError(err.message));
  }

  const login = async (navigate) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    setCurrentUser(user);
    navigate("/chat");
  };

  function handleSignUp(email, password, navigate) {
    setError("");
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => handleLogin(email, password, navigate))
      .catch((err) => setError(err.message));
  }

  function handleLogout() {
    fire.auth().signOut();
  }
  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.email);
      } else {
        setCurrentUser("");
      }
    });
  }
  useEffect(() => {
    authListener();
  }, []);
  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        handleLogin,
        handleSignUp,
        handleLogout,
        login,
        firestore,
        auth,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
