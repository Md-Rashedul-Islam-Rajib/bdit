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
    })
  }

  return (
    <div>
      Signup
    </div>
  )
}

export default Signup
