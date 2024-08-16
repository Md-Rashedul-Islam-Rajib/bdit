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
      .then((result) =>{
        setUser(result.user);
        navigate(destination);
      })
      .catch((error) => {
        console.log(error)
      })
    }


  return (
    <div className="md:w-2/5 mx-auto border rounded-lg p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="input input-bordered flex items-center gap-2 mb-4">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input 
          type="text"
          className="grow"
          placeholder="Email"
          {...register("email", { required: true })}
           />
           {errors.email && (
            <span className="text-red-600 text-sm">Email is required</span>
          )}
        </label>

          <label className="input input-bordered flex items-center gap-2 mb-4">

          </label>
      </form>
    </div>
  )
}

export default Login
