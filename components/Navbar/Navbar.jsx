import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import logo from "../../public/assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>ComPote</a>
      </Link>

      <Link href="/">
        <a>
          <div className={styles.logo}>
            <Image src={logo} alt="Logo de ComPote" layout="responsive" />
          </div>
        </a>
      </Link>

      <span>A propos</span>
    </nav>
  );
};

export default Navbar;
