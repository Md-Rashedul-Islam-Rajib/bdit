import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useAuth = () => {
  const auth = useContext(AuthContext);
  if(!auth) {
    throw new Error("No Context Found")
  }
  return auth;
}

export default useAuth
