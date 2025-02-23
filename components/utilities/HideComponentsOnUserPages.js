"use client";
import { usePathname } from "next/navigation";

const HideComponentsOnUserPages = ({ children }) => {
  const pathname = usePathname();
  const isUserPage = pathname.startsWith("/user/");

  return !isUserPage && <>{children}</>;
};

export default HideComponentsOnUserPages;
