import styles from "./Quote.module.css";
import intello from "../../public/assets/images/potes/pote_intello.png";
import quote from "../../public/assets/images/quote.png";
import Image from "next/image";
import Link from "next/link";

const Quote = () => {
  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        <Image src={quote} alt="" layout="fill" objectFit="contain" placeholder="blur" />
      </div>
      <q>
        Voir, c&apos;est savoir;
        <br />
        vouloir,c&apos;est pouvoir ;<br />
        oser, c&apos;est avoir.
      </q>
      <cite>Alfred de Musset</cite>

      <Link href="/contact">
        <a>
          <button>Et si on travaillait ensemble ?</button>
        </a>
      </Link>

      <div className={styles.intello}>
        <div className={styles.wrapper}>
          <Image src={intello} alt="Pote intello" layout="fill" objectFit="contain" placeholder="blur" />
        </div>
      </div>
    </div>
  );
};

export default Quote;
