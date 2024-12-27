import Link from "next/link";

const ListItemLink = ({ title, destination }) => {
  return (
    <li>
      <Link href={destination} className="hover:text-white transition">
        {title}
      </Link>
    </li>
  );
};

export default ListItemLink;
