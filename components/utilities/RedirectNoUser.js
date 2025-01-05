"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const RedirectNoUser = ({ children }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return <>{children}</>;
};

export default RedirectNoUser;
