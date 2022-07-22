import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/logo2.png";
import styles from "./Tagline.module.css";

const Tagline = () => {
  return (
    <div className={styles.container}>
      <span className="not-mobile">Votre acolyte dans tous vos projets</span>
      <Link href="/">
        <a>
          <div className={styles.logo}>
            <Image src={logo} alt="Logo de ComPote" layout="responsive" />
          </div>
        </a>
      </Link>
      <span className="not-mobile">ComPote pour une com qui dépote</span>
    </div>
  );
};

export default Tagline;
