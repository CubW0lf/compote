import Link from "next/link";
import styles from "../styles/Project.module.css";

const Project = () => {
  return (
    <div className={styles.container}>
      <h1>Votre projet</h1>
      <article>
        <h2>En résumé</h2>
        <div className={styles.video}>VIDEO DE PREZ DE LA SECTION</div>
        <p>Blablabla article écrit</p>
      </article>
      <article>
        <h2>En Détails</h2>
        <div className={styles.video}>VIDEO DE PREZ DE LA SECTION</div>
        <p>Blabla article écrit</p>
      </article>
      <h2>Concrètement des projets</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <h2>Et si ce n&apos;est pas assez spécifique</h2>
      <Link href="/">
        <a>Allez voir les prestations détaillées</a>
      </Link>
    </div>
  );
};

export default Project;
