import Link from "next/link";
import styles from "./Header.module.css";
import logo from "./logo.svg";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/">
          <a>
            <img className={styles.logo} src={logo} width="150" alt="kw logo" />
          </a>
        </Link>
        <nav className={styles.nav}></nav>
      </div>
    </header>
  );
};

export default Header;
