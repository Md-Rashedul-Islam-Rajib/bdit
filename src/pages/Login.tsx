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
  return (
    
  )
}

export default Login
