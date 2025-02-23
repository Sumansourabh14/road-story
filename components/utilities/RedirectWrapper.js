"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const RedirectWrapper = ({ children }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!!user) {
      router.push("/user/dashboard");
    }
  }, [user]);

  return <>{children}</>;
};

export default RedirectWrapper;
