import Link from "next/link";

const SignUpListItemLink = () => {
  return (
    <li>
      <Link href="/signup" className="hover:underline transition">
        Sign up
      </Link>
    </li>
  );
};

export default SignUpListItemLink;
