"use client";
import { login } from "@/services/globalApi";
import { useState } from "react";
import LoadingButton from "../buttons/LoadingButton";
import { Input } from "../ui/input";
import PasswordInput from "./PasswordInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    const res = await login(payload);

    if (res.data.success) {
      setErrorText("");
      const { token } = res.data;
    } else if (!res.data.success) {
      setErrorText(res.data.message);
    } else if (res === undefined) {
      setErrorText("An error occured. Please try again.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      {!!errorText && <p className="text-center text-red-500">{errorText}</p>}

      {/* Email Field */}
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

      {/* Password Field */}
      <div className="space-y-1">
        <label htmlFor="password">Password</label>
        <PasswordInput
          password={password}
          handlePasswordChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <LoadingButton
        isDisabled={!email || !password}
        loading={loading}
        title={"Login"}
      />
    </form>
  );
};

export default LoginForm;
