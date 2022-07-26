import Link from "next/link";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Page non trouvée - Erreur 404</h1>
      <h2>Oups. Vous vous êtes perdu</h2>
      <q>On dit le Nord ! Selon comme on est tourné ça change tout !</q>
      <cite>Perceval</cite>

      <Link href="">
        <a>Retourner à l&apos;accueil</a>
      </Link>
      <q>Faut pas respirer la compote ca fait tousser</q>
      <cite>Seigneur Kadoc</cite>
    </div>
  );
};

export default NotFound;
