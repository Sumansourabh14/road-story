"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const User = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/user/dashboard");
  }, [router]);

  return null;
};

export default User;
