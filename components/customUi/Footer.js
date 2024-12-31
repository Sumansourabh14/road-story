import { brandTitle } from "@/utils/content/generalSiteContent";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ListItemLink from "../navigation/ListItemLink";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 font-[family-name:var(--font-inter)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-lg font-semibold text-white">{brandTitle}</h2>
            <p className="mt-2 text-sm">
              Creating value with innovative solutions and unmatched services.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <ListItemLink title={"Home"} destination={"/"} />
              <ListItemLink
                title={"Upload Video"}
                destination={"/upload/video"}
              />
              <ListItemLink title={"Videos"} destination={"/videos"} />
              <ListItemLink title={"About"} destination={"/about"} />
              {/* <ListItemLink title={"Login"} destination={"/login"} /> */}
              <li>
                <Link href="/signup" className="hover:bg-zinc-800 transition">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <div className="mt-2 flex space-x-4">
              <Link
                href="https://x.com/roadstoryy"
                className="hover:text-white transition"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link
                href="#"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {brandTitle}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
