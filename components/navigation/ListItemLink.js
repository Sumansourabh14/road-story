import Link from "next/link";

const ListItemLink = ({ title, destination }) => {
  return (
    <li>
      <Link href={destination} className="hover:underline transition">
        {title}
      </Link>
    </li>
  );
};

export default ListItemLink;
