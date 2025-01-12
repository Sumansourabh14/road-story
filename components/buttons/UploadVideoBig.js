"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const UploadVideoBig = () => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until the theme is resolved
  if (!mounted) {
    return null;
  }

  return (
    <Link
      href={"/upload/video"}
      className={`px-20 py-6 ${
        theme === "light"
          ? "bg-black text-white hover:bg-zinc-700"
          : "bg-white text-black hover:bg-zinc-300"
      } text-xl rounded-lg font-bold`}
    >
      Upload Video
    </Link>
  );
};

export default UploadVideoBig;
