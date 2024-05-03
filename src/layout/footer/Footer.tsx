import { FC, ReactNode } from "react";
import "./Footer.module.css";

import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

interface SocialMediaElement {
  name: string;
  icon: ReactNode;
  href: string;
}

const socialMediaElements: SocialMediaElement[] = [
  {
    name: "fb",
    icon: <FaFacebook />,
    href: "https://en-us.facebook.com/",
  },
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    href: "https://pl.linkedin.com/",
  },
  {
    name: "youtube",
    icon: <FaYoutube />,
    href: "https://www.youtube.com/",
  },
  {
    name: "twitter",
    icon: <FaTwitter />,
    href: "https://twitter.com/",
  },
];

export const Footer = () => {
  return (
    <footer>
      <FooterContact />
      <SocialMediaIcons icons={socialMediaElements} />
      <span>Photo by Dawid Zawiła on Unsplash</span>
    </footer>
  );
};

const SocialMediaIcons: FC<{ icons: SocialMediaElement[] }> = ({ icons }) => {
  return (
    <ul>
      {icons.map(({ name, href, icon }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noreferrer">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

const FooterContact = () => (
  <span>
    Krzysztof Gasik &copy; 2019 find me on &#160;
    <a
      href="https://github.com/KrzysztofGasik"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
    </a>
    &#160;&#160;and&#160;&#160;
    <a
      href="https://linkedin.com/in/krzysztof-gasik"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>
  </span>
);
