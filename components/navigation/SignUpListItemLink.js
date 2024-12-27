import Link from "next/link";
import React from "react";

const SignUpListItemLink = () => {
  return (
    <li>
      <Link
        href="/signup"
        className="hover:bg-zinc-800 transition px-8 py-2 bg-black rounded-md border-b-2"
      >
        Sign up
      </Link>
    </li>
  );
};

export default SignUpListItemLink;
