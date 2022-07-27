import styles from "./Navbar.module.css";
import ToggleMenuIcon from "../ToggleMenuIcon/ToggleMenuIcon";
import { useEffect, useState } from "react";
import { getAll } from "../../services/directus/utils";
import Tagline from "../Tagline/Tagline";
import DynamicIcon from "../DynamicIcon/DynamicIcon";

const Navbar = () => {
  const [networks, setNetworks] = useState(null);

  useEffect(() => {
    getAll("network")
      .then((response) => setNetworks(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <header className={styles.container}>
      <ToggleMenuIcon />

      <Tagline />

      <ul className="not-mobile">
        {networks &&
          networks.map((n) => (
            <li key={n.id} className={styles.networkItem}>
              <a href={n.url} target="_blank" rel="noreferrer" alt={`Lien vers ${n.name}`}>
                {n && <DynamicIcon name={n.react_icon} />}
              </a>
            </li>
          ))}
      </ul>
    </header>
  );
};

export default Navbar;
