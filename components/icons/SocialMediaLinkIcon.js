import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SocialMediaLinkIcon = ({ destination, label, icon }) => {
  return (
    <Link
      href={destination}
      className="hover:scale-105 transition"
      aria-label={label}
      target="_blank"
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};

export default SocialMediaLinkIcon;
