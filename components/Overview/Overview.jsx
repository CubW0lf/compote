import styles from "./Overview.module.css";
import mockup from "../../public/assets/images/about.png";
import Image from "next/image";

const Overview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mockup}>
        <Image src={mockup} alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.text}>
        <h1>ComPote c&apos;est quoi ?</h1>
        <p>Nous aidons les PME à se lancer dans la communication digitale et Web en proposant une selection de média.</p>
        <br />
        <p>
          Les particuliers et les PME se retrouvent souvent confrontés à une problématique d&apos;argent et de connaissance
          technique lorsqu&apos;elles désirent élargir leur audience ou tout simplement communiquer leurs prestations. Boites
          de comm&apos;, cousin éloigné qui bidouille, les solutions sont nombreuses mais aucune n&apos;est viable
          fiancièrement ET techniquement.
        </p>
        <br />
        <p>
          Je vous propose de vous lancer dans l&apos;aventure de la communication facilement. Avec un intervenant unique et
          concerné. Une personne digne de confiance, disponible, prête à vous conseiller en fonction de votre projet et aux
          connaissances polyvalentes. Si votre projet n&apos;est pas le nouveau Facebook, un coup de tête du soir, ou un
          projet très personnel alors je suis la bonne personne. Nous allons pouvoir choisir ensemble les meilleures
          solutions pour votre projet. Vous deviendez mon objectif et je serais votre acolyte. Votre ComPote.
        </p>
      </div>
    </div>
  );
};

export default Overview;
