"use client";
import { loginUser } from "@/redux/slices/login";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "../buttons/LoadingButton";
import { Input } from "../ui/input";
import PasswordInput from "./PasswordInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, user, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    dispatch(loginUser(payload));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      {!!error && <p className="text-center text-red-500">{error}</p>}

      <div className="space-y-1">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="password">Password</label>
        <PasswordInput
          password={password}
          handlePasswordChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <LoadingButton
        isDisabled={!email || !password}
        loading={loading}
        title={"Login"}
      />
    </form>
  );
};

export default LoginForm;
