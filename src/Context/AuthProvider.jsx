import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./../Services/firebase.config";

export const authContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const loggedOut = () => {
    return signOut(auth);
  };
  const authInfo = { createUser, loginUser, user, loggedOut };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}

export default AuthProvider;
