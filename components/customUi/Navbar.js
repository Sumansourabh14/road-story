"use client";
import { brandTitle } from "@/utils/content/generalSiteContent";
import { useState } from "react";
import ListItemLink from "../navigation/ListItemLink";
import SignUpListItemLink from "../navigation/SignUpListItemLink";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { logout } from "@/redux/slices/user";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="font-[family-name:var(--font-inter)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold flex items-center gap-4">
          <Image
            src="/images/road-storyy-logo.png"
            width={30}
            height={30}
            alt="road story logo"
          />
          {brandTitle}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 md:items-center">
          <ThemeToggle />
          <ListItemLink title={"Home"} destination={"/"} />
          <ListItemLink title={"Upload Video"} destination={"/upload/video"} />
          <ListItemLink title={"Videos"} destination={"/videos"} />
          <ListItemLink title={"Maps"} destination={"/maps"} />
          <ListItemLink title={"Discussions"} destination={"/discussions"} />
          {/* <ListItemLink title={"About"} destination={"/about"} /> */}
          {!!user ? (
            <>
              <ListItemLink
                title={"Dashboard"}
                destination={"/user/dashboard"}
              />
              <li>
                <Button
                  onClick={handleLogout}
                  className="hover:bg-red-900 transition px-8 py-2 bg-red-800 rounded-md border-b-2 text-md font-light"
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <ListItemLink title={"Login"} destination={"/login"} />
              <SignUpListItemLink />
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="space-y-4 px-4 py-4">
            <ListItemLink title={"Home"} destination={"/"} />
            <ListItemLink
              title={"Upload Video"}
              destination={"/upload/video"}
            />
            <ListItemLink title={"Videos"} destination={"/videos"} />
            <ListItemLink title={"Maps"} destination={"/maps"} />
            <ListItemLink title={"Discussions"} destination={"/discussions"} />
            {/* <ListItemLink title={"About"} destination={"/about"} /> */}
            {!!user ? (
              <li>
                <Button
                  onClick={handleLogout}
                  className="hover:bg-red-900 transition px-8 py-2 bg-red-800 rounded-md border-b-2 text-md font-light"
                >
                  Logout
                </Button>
              </li>
            ) : (
              <>
                <ListItemLink title={"Login"} destination={"/login"} />
                <SignUpListItemLink />
              </>
            )}
          </ul>
        </div>
      )}
      <hr />
    </nav>
  );
};

export default Navbar;
