import styles from "./Quote.module.css";
import intello from "../../public/assets/images/potes/pote_intello.png";
import quote from "../../public/assets/images/quote.png";
import Image from "next/image";

const Quote = () => {
  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        <Image src={quote} alt="" layout="fill" objectFit="contain" />
      </div>
      <q>
        L&apos;oiseau matinal attrape le ver
        <br />
        mais la deuxième souris aura le fromage
      </q>
      <cite>Proverbe Anglais</cite>

      <button>Et si on travaillait ensemble ?</button>

      <div className={styles.intello}>
        <div className={styles.wrapper}>
          <Image src={intello} alt="Pote intello" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Quote;
