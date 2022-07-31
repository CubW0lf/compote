import styles from "./Navbar.module.css";
import ToggleMenuIcon from "../ToggleMenuIcon/ToggleMenuIcon";
import { useEffect, useState } from "react";
import { getAll } from "../../../services/directus/utils";
import Tagline from "../Tagline/Tagline";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const DynamicIcon = dynamic(() => import("../DynamicIcon/DynamicIcon"), {
  suspense: true,
});

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
                {n && (
                  <Suspense fallback={`Loading...`}>
                    <DynamicIcon name={n.react_icon} />
                  </Suspense>
                )}
              </a>
            </li>
          ))}
      </ul>
    </header>
  );
};

export default Navbar;
