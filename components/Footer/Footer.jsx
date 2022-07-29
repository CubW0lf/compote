import { useEffect, useState } from "react";
import { find, getAll } from "../../services/directus/utils";
import styles from "./Footer.module.css";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const DynamicIcon = dynamic(() => import("../DynamicIcon/DynamicIcon"), {
  suspense: true,
});
import Link from "next/link";

const Footer = () => {
  const [infos, setInfos] = useState(null);
  const [networks, setNetworks] = useState(null);

  useEffect(() => {
    find("infos", 1)
      .then((response) => setInfos(response))
      .catch((err) => console.log(err));

    getAll("network")
      .then((response) => setNetworks(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <ol>
            <li>
              <Link href="/materiel#web">
                <a>
                  <span>Technologies Web</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/materiel#photo">
                <a>
                  <span>Materiel Photo</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/materiel#video">
                <a>
                  <span>Materiel Video</span>
                </a>
              </Link>
            </li>
          </ol>
        </div>
        <div className={styles.right}>
          <div className={styles.networks}>
            {networks &&
              networks.map((n) => (
                <a href={n.url} target="_BLANK" rel="noreferrer" key={n.id} alt={`Lien vers ${n.name}`}>
                  <Suspense fallback={`Loading...`}>
                    <DynamicIcon name={n.react_icon} />
                  </Suspense>
                </a>
              ))}
          </div>
          <div className={styles.infos}>
            <div className={styles.infoItem}>
              <IoLocationSharp />
              <span>{infos && infos.adress}</span>
            </div>
            <div className={styles.infoItem}>
              <BsTelephoneFill />
              <span>{infos && infos.phone.match(/(.{1,2})/g).join(" ")}</span>
            </div>
            <div className={styles.infoItem}>
              <IoMailSharp />
              <span>{infos && infos.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>
          © COM’ POTE 2022 MENTIONS LÉGALES - dev: ComPote - design:
          <a href="https://shannonburg.fr" target="_BLANK" rel="noreferrer">
            @shannon burg
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
