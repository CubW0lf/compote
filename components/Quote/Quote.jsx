import styles from "./Quote.module.css";
import intello from "../../public/assets/images/potes/pote_intello.png";
import QuoteSvg from "../../public/assets/images/svg/quote";
import Image from "next/image";
import Link from "next/link";

const Quote = () => {
  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        <QuoteSvg />
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
          <Image
            src={intello}
            alt="Pote intello"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
