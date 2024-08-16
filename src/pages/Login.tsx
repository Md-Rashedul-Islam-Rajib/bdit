import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { logInUser, setUser, googleLogin, githubLogin, user } =
    useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const destination = location?.state || "/";

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginFormInputs>();

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
      const {email, password} = data;
      logInUser(email,password)
      .then((result)=>{
        setUser(result.user);
      })
      .catch((error)=> {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
    }

    const handleGoogle = () => {
     googleLogin()
     .then((result) => {
      setUser(result.user);
      navigate(destination)
     })
     .catch((error) => {
      console.log(error)
     })
    }

    const handleGithub = () => {
      githubLogin()
    }


  return (
    
  )
}

export default Login
