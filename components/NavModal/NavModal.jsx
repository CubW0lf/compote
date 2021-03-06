import Link from "next/link";
import styles from "./NavModal.module.css";
import { useUxContext } from "../../contexts/uxContext";
import { Dialog } from "@headlessui/react";
import { useRef } from "react";

const NavModal = () => {
  const { menuVisible, toggleMenuVisibility } = useUxContext();

  const backdrop = useRef();

  return (
    <Dialog open={menuVisible} onClose={() => toggleMenuVisibility(false)} initialFocus={backdrop}>
      <nav>
        <ul className={styles.container}>
          <li className={menuVisible ? styles.enter : styles.leave} onClick={() => toggleMenuVisibility(false)}>
            <Link href="/" tabIndex="0">
              <a>
                <span>Accueil</span>
              </a>
            </Link>
            <span>Le début du commencement</span>
          </li>

          <li className={menuVisible ? styles.enter : styles.leave} onClick={() => toggleMenuVisibility(false)}>
            <Link href="/votre-projet">
              <a>
                <span>Votre Projet</span>
              </a>
            </Link>
            <span>Une communication à votre image</span>
          </li>

          <li className={menuVisible ? styles.enter : styles.leave} onClick={() => toggleMenuVisibility(false)}>
            <Link href="/prestations">
              <a>
                <span>Prestations</span>
              </a>
            </Link>
            <span>Toutes les prestations sur mesure</span>
          </li>

          <li className={menuVisible ? styles.enter : styles.leave} onClick={() => toggleMenuVisibility(false)}>
            <Link href="/a-propos">
              <a>
                <span>A propos</span>
              </a>
            </Link>
            <span>En savoir plus sur Compote</span>
          </li>

          <li className={menuVisible ? styles.enter : styles.leave} onClick={() => toggleMenuVisibility(false)}>
            <Link href="/contact">
              <a>
                <span>Contact</span>
              </a>
            </Link>
            <span>Pour toute question ou devis</span>
          </li>
        </ul>
      </nav>
      <Dialog.Overlay
        ref={backdrop}
        className={styles.backdrop}
        onClick={() => toggleMenuVisibility(false)}
      ></Dialog.Overlay>
    </Dialog>
  );
};

export default NavModal;
