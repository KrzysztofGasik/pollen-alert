import { FaLinkedin, FaGithub } from "react-icons/fa";
import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <FooterContact />
      <p className={classes.Copyright}>Photo by Dawid Zawiła on Unsplash</p>
    </footer>
  );
};

const FooterContact = () => (
  <div className={classes.Contact}>
    Krzysztof Gasik &copy; 2024
    <a
      href="https://github.com/KrzysztofGasik"
      target="_blank"
      rel="noreferrer"
      className={classes.Link}
    >
      <FaGithub className={classes.Github} size={25} />
    </a>
    <a
      href="https://linkedin.com/in/krzysztof-gasik"
      target="_blank"
      rel="noreferrer"
      className={classes.Link}
    >
      <FaLinkedin className={classes.Linkedin} size={25} />
    </a>
  </div>
);
