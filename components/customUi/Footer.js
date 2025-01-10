import { brandTitle } from "@/utils/content/generalSiteContent";
import {
  faInstagram,
  faRedditAlien,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import SocialMediaLinkIcon from "../icons/SocialMediaLinkIcon";
import ListItemLink from "../navigation/ListItemLink";

const Footer = () => {
  return (
    <footer className="font-[family-name:var(--font-inter)]">
      <hr />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-lg font-semibold">{brandTitle}</h2>
            <p className="mt-2 text-sm">
              Road safety awareness platform, built for a new India.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <ListItemLink title={"Home"} destination={"/"} />
              <ListItemLink
                title={"Upload Video"}
                destination={"/upload/video"}
              />
              <ListItemLink title={"Videos"} destination={"/videos"} />
              {/* <ListItemLink title={"About"} destination={"/about"} /> */}
              <ListItemLink
                title={"Discussions"}
                destination={"/discussions"}
              />
              <ListItemLink title={"Login"} destination={"/login"} />
              <li>
                <Link href="/signup" className="hover:underline transition">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="mt-2 flex space-x-4">
              <SocialMediaLinkIcon
                destination={"https://x.com/roadstoryy"}
                label="X"
                icon={faXTwitter}
              />
              <SocialMediaLinkIcon
                destination={"https://instagram.com/road.storyy/"}
                label="Instagram"
                icon={faInstagram}
              />
              <SocialMediaLinkIcon
                destination={"https://www.reddit.com/user/roadstoryy/"}
                label="Reddit"
                icon={faRedditAlien}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {brandTitle}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
