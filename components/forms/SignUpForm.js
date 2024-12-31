"use client";
import { checkUsernameExists, signUp } from "@/services/globalApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingButton from "../buttons/LoadingButton";
import { Input } from "../ui/input";
import PasswordInput from "./PasswordInput";

const SignUpForm = () => {
  // State variables for individual input values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [usernameText, setUsernameText] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkUsernameLoading, setCheckUsernameLoading] = useState(false);
  const router = useRouter();

  // Handlers for form submission and value changes
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const payload = {
      username,
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

  const isUsernameUnique = async (username) => {
    setCheckUsernameLoading(true);

    const res = await checkUsernameExists(username);

    if (res.data.success) {
      setUsernameText("This username is available!");
    } else if (!res.data.success) {
      setUsernameText(res.data.message);
    }

    setCheckUsernameLoading(false);
  };

  useEffect(() => {
    if (username.trim().length > 0) {
      isUsernameUnique(username);
    } else {
      setUsernameText("");
    }
  }, [username]);

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      {!!errorText && <p className="text-center text-red-500">{errorText}</p>}
      {/* Username Field */}
      <div className="space-y-1">
        <label htmlFor="username">Username</label>
        <Input
          id="username"
          type="text"
          placeholder="Enter any username. This is unique to all users."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {!!usernameText && (
          <p
            className={`text-left text-sm ${
              usernameText === "This username is available!"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {usernameText}
          </p>
        )}
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
        isDisabled={!username || !email || !password}
        loading={loading}
        title={"Sign Up"}
      />
    </form>
  );
};

export default SignUpForm;
