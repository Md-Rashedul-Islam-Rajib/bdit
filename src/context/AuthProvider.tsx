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
  }