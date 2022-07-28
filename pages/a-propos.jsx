import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { find } from "../services/directus/utils";
import moi from "../public/assets/images/moi.jpg";
import styles from "../styles/About.module.css";

export async function getStaticProps() {
  const page = await find("page", 4);
  return {
    props: {
      page: page,
    },
  };
}

const About = ({ page }) => {
  return (
    <>
      <Head>
        <title>A propos | ComPote</title>
        <meta
          name="description"
          content="Qui se cache derrière le projet Com' Pote ? Pour en savoir plus nous vous présentons vincent notre créateur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main>
          <div className={styles.article_wrapper}>
            <aside className={styles.aside}>
              <Image src={moi} alt="" layout="fill" objectPosition="top left" />
            </aside>
            <article className={styles.article}>
              {page && <h1>{page.title}</h1>}
              {page && <div dangerouslySetInnerHTML={{ __html: page.text }} className={styles.articleContent}></div>}
              <div className={styles.cta}>
                <Link href="/contact">
                  <a>
                    <button>Apprenons à nous connaitre</button>
                  </a>
                </Link>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
