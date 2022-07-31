import Link from "next/link";
import styles from "./Tagline.module.css";
import LogoCircle from "../../../public/assets/images/svg/logoCircle";
import LogoAlt from "../../../public/assets/images/svg/logo_alt";

const Tagline = () => {
  return (
    <div className={styles.container}>
      <span className="not-mobile">Votre acolyte dans tous vos projets</span>
      <Link href="/">
        <a>
          <div className={styles.logo}>
            <LogoCircle />
            <LogoAlt />
          </div>
        </a>
      </Link>
      <span className="not-mobile">ComPote pour une com qui dépote</span>
    </div>
  );
};

export default Tagline;
