"use client";
import { brandTitle } from "@/utils/content/generalSiteContent";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-300 font-[family-name:var(--font-inter)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="text-xl font-bold text-white">
          {brandTitle}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Sign up
            </a>
          </li>
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
        <div className="md:hidden bg-gray-800">
          <ul className="space-y-4 px-4 py-4">
            <li>
              <a href="#" className="block hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
