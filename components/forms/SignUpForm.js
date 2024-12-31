"use client";
import { signUp } from "@/services/globalApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingButton from "../buttons/LoadingButton";
import { Input } from "../ui/input";
import PasswordInput from "./PasswordInput";

const SignUpForm = () => {
  // State variables for individual input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handlers for form submission and value changes
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
    };

    const res = await signUp(payload);

    if (res.data.success) {
      router.push("/account-created");
      setErrorText("");
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
      {/* Name Field */}
      <div className="space-y-1">
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

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
        isDisabled={!name || !email || !password}
        loading={loading}
        title={"Sign Up"}
      />
    </form>
  );
};

export default SignUpForm;
