import React, { useContext, useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { AuthContext } from "../context/AuthProvider.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth.tsx";

interface SignupFormInput {
  Name: string;
  email: string;
  password: string;
}


const Signup: React.FC = () => {
  const {createUser, logOutUser} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const onSubmit: SubmitHandler<RegisterFormInput> = (data) => {
    const { email, password } = data;

    if (password.length < 6) {
      return setError('Password must be at least 6 characters long');
    }

    if (!/[A-Z]/.test(password)) {
      return setError('Password must have at least one uppercase character');
    }

    if (!/[a-z]/.test(password)) {
      return setError('Password must have at least one lowercase character');
    }
    setError(null);

    createUser(email, password)
    .then(result => {
      console.log(result.user);
      logOutUser();
      navigate('/login');
    })
    .catch(error => {
      console.error(error);
        setError(error.message);
    })
  }

  return (
    <div>
      
      <div className="md:w-[25%] mx-auto p-4 border rounded-lg bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="input input-bordered flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input 
          type="text"
          className="grow py-2 pl-3"
          placeholder="Name"
          {...register("name", { required: true })}
          />
            {errors.name && (
            <span className="text-red-600 text-sm">Name is required</span>
          )}
          </label>

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
          className="grow py-2 pl-3"
          placeholder="Email"
          {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600 text-sm">Email is required</span>
          )}
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input 
          type={showPassword ? "text" : "password"}
          className="grow py-2 pl-3"
          placeholder="Password"
          {...register("password", { required: true })}
           />
           <span
           onClick={() => setShowPassword(!showPassword)}
           className="cursor-pointer"
           >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
           </span>
           {errors.password && (
            <span className="text-red-600 text-sm">Password is required</span>
          )}
          </label>

          <div className="flex justify-center">
            <button
            type="submit"
            className="btn w-[40%] py-1 rounded-lg font-bold bg-black text-white"
            >
              Sign Up
            </button>

          </div>

        </form>

          <div className="flex justify-between font-semibold my-4">
            <p>Already have an account?</p>
            <Link to='/login'>
            <p>Login Here</p>
            </Link>
          </div>

      </div>

    </div>
  )
}

export default Signup
