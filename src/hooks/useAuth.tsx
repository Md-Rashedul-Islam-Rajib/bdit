import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useAuth = () => {
  const auth = useContext(AuthContext);
}

export default useAuth
