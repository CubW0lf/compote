import Head from "next/head";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <>
      <Head>
        <title>Prestations en détail | ComPote</title>
        <meta name="description" content="Nos prestations sur mesure. Web, Photo, Vidéo etc..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>Les Prestations à la carte</h1>
        <div className={styles.video}>VIDEO DE PREZ DE LA PAGE</div>
        <h2>Un service sur mesure</h2>
        <h3>Un site à refaire</h3>
        <h3>Un logo ou une image de marque a créer</h3>
        <h3>Besoin de contenu pour votre communication</h3>
        <p>images, photos</p>
        <h3>Besoin de contenu éditorial ou de CM mais pas de temps</h3>
        <h3>Autre chose?</h3>
      </div>
    </>
  );
};

export default Services;
