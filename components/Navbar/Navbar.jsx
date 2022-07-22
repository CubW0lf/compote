import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ToggleMenuIcon from "../ToggleMenuIcon/ToggleMenuIcon";
import { useEffect, useState } from "react";
import { getAll } from "../../services/directus/utils";
import getAssetURL from "../../services/directus/getAssets";
import Tagline from "../Tagline/Tagline";

const Navbar = () => {
  const [networks, setNetworks] = useState(null);

  useEffect(() => {
    getAll("network")
      .then((response) => setNetworks(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <nav className={styles.container}>
      <ToggleMenuIcon />

      <Tagline />

      <ul className="not-mobile">
        {networks &&
          networks.map((n) => (
            <li key={n.id} className={styles.networkItem}>
              <a href={n.url} target="_blank" rel="noreferrer">
                {n.logo && <Image src={getAssetURL(n.logo.id)} alt="" layout="fill" objectFit="contain" />}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
