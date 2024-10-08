import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider.tsx";
import { UserCredential } from "firebase/auth";
// import toast, { Toaster } from "react-hot-toast";

interface LoginFormInputs {
  email: string;
  password: string;
}

interface ErrorObject extends Error{
message: string;

}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const auth = useContext(AuthContext);

  if(!auth) {
    throw new Error ("context is not present here")
  }

  const { logInUser, setUser, googleLogin, githubLogin } = auth;

  const location = useLocation();
  const navigate = useNavigate();
  const destination = location?.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    const { email, password } = data;
    logInUser(email, password)
      .then((result: UserCredential) => {
        setUser(result.user);
        navigate(destination);
      })
      .catch((error:ErrorObject) => {
        console.error(error?.message); // You can also display this error message to the user
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result: UserCredential) => {
        setUser(result.user);
        navigate(destination);
      })
      .catch((error:ErrorObject) => {
        console.error(error?.message); // You can also display this error message to the user
      });
  };

  const handleGithub = () => {
    githubLogin()
      .then((result:UserCredential) => {
        setUser(result.user);
        navigate(destination);
      })
      .catch((error:ErrorObject) => {
        console.error(error?.message); // You can also display this error message to the user
      });
  };

  return (
    <div className="bg-black h-full">
      <h3 className="text-center text-white py-2 font-bold text-3xl">
        Login Form
      </h3>
      <div className="md:w-[25%] mx-auto border rounded-lg px-4 bg-white py-4">
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
              Login
            </button>
          </div>
        </form>

        <div className="flex justify-between my-4 font-semibold">
          <p>New here?</p>
          <Link to="/register">
            <p>Create an account</p>
          </Link>
        </div>

        <hr />

        <div className="mt-4 flex">
          <FcGoogle
            onClick={handleGoogle}
            className="mx-auto h-10 w-10 cursor-pointer"
          />
          <FaGithub
            onClick={handleGithub}
            className="mx-auto h-10 w-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
