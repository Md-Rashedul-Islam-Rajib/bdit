import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import React, { createContext, useEffect, useState, ReactNode } from "react";
import auth from "../firebase/firebase.config";

export interface AuthContextProps {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  logInUser: (email: string, password: string) => Promise<UserCredential>;
  logOutUser: () => Promise<void>;
  googleLogin: () => Promise<UserCredential>;
  githubLogin: () => Promise<UserCredential>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}


export const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  // Register user
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user
  const logInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out user
  const logOutUser = async () => {
    await signOut(auth);
    setUser(null);
  };

  // Google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // GitHub login
  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo: AuthContextProps = {
    user,
    setUser,
    createUser,
    logInUser,
    logOutUser,
    googleLogin,
    githubLogin,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
