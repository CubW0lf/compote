import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>ComPote</a>
      </Link>
    </nav>
  );
};

export default Navbar;
