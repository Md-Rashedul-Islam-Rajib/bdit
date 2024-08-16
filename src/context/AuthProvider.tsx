import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    User,
  } from "firebase/auth";
  import React, { createContext, useEffect, useState, ReactNode } from "react";
  import auth from "../firebase/firebase.config";

  interface AuthContextProps {
    user: User | null;
    loading: boolean;
    createUser: (email: string, password: string) => Promise<void>;
    logInUser: (email: string, password: string) => Promise<void>;
    logOutUser: () => Promise<void>;
    googleLogin: () => Promise<void>;
    githubLogin: () => Promise<void>;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  }

  export const AuthContext = createContext<AuthContextProps | undefined>(
    undefined
  );

  interface AuthProviderProps {
    children: ReactNode;
  }

 
  
  const AuthProvider: React.FC<AuthContextProps> = ({children}) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);

    // Register user
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }


  // Sign in user
  const logInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Sign out user
  const logOutUser = async () => {
    await signOut(auth);
    setUser(null);
  }


  // Google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }


   // GitHub login
   const githubProvider = new GithubAuthProvider();
   const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
   }


   useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    }
   },[])


    return (
      <div>
        
      </div>
    )
  }
  
  export default AuthProvider
  