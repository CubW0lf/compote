import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Project.module.css";
import quadrillage from "../public/assets/images/quadrillage.png";
import pote from "../public/assets/images/potes/pote_ordi.png";
import observateur from "../public/assets/images/potes/pote_observateur.png";
import { find, getAll } from "../services/directus/utils";
import cafe from "../public/assets/images/potes/pote_cafe.png";
import ProjectTile from "../components/ProjectTile/ProjectTile";
import { shimmer, toBase64 } from "../services/utils";

export async function getStaticProps() {
  const page = await find("page", 3);
  const projects = await getAll("web_project");
  return {
    props: {
      page: page,
      projects: projects,
    },
  };
}

const Project = ({ page, projects }) => {
  return (
    <>
      <Head>
        <title>Votre Projet | ComPote</title>
        <meta
          name="description"
          content="Pour un projet qui vous ressemble au plus près de vos envies, avec nos solutions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Votre projet, et si on en discutait ?</h1>
          <div className={`${styles.pote}`}>
            <Image src={pote} alt="Petit Pote avec son ordi" layout="fill" objectFit="contain" placeholder="blur" />
          </div>
          <div className={styles.video}>
            <iframe
              width="560"
              height="315"
              style={{ width: "100%", height: "100%" }}
              src="https://www.youtube.com/embed/I4hCp5ZETb8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>

        <main>
          <div className={styles.article_wrapper}>
            <article className={styles.article}>
              {page && <h2>{page.title}</h2>}
              {page && <div dangerouslySetInnerHTML={{ __html: page.text }} className={styles.articleContent}></div>}
              <div className={styles.cta}>
                <Link href="/contact">
                  <a>
                    <button>Parlons-en Ensemble</button>
                  </a>
                </Link>
                <span className="font">On vous offre le café</span>
              </div>
            </article>
            <div className={styles.cafe}>
              <div className={styles.wrapper}>
                <Image
                  src={cafe}
                  alt="Petit pote avec un café"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="right"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <section className={styles.examples} id="exemples">
            <h2>Quelques exemples de réalisations</h2>
            <div className={styles.grid}>
              {projects &&
                projects.map((p) => (
                  <Link href={`projet/${p.id}`} key={p.id}>
                    <a>
                      <ProjectTile project={p} />
                    </a>
                  </Link>
                ))}
            </div>
            <Link href="/prestations">
              <a className={styles.goToServices}>
                <button>Voir les prestations sur mesure</button>
              </a>
            </Link>
          </section>
          <div className={styles.spacer}>
            <div className={styles.observateur}>
              <div className={styles.wrapper}>
                <Image
                  src={observateur}
                  alt="Pote observateur"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Project;
