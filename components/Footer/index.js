import styles from "./Footer.module.css";
import githubLogo from "./github.svg";
import email from "./email.svg";
import igLogo from "./instagram.svg";
import logomark from "../Header/logo.svg";

const Footer = () => (
  <footer>
    <div className={styles.container}>
      <img src={logomark} className={styles.logo} width="120px" alt="kw logo" />
      <nav className={styles.nav}>
        <ul>
          <li>
            <a target="_blank" href="mailto:witkowskik46@gmail.com">
              <img src={email} alt="Kacper Witkowski email" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/wiitkowsky/"
            >
              <img src={igLogo} alt="Kacper Witkowski instagram" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kacperwitkowski"
            >
              <img src={githubLogo} alt="Kacper Witkowski github" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
