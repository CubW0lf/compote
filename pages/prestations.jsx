import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Services.module.css";
import pote from "../public/assets/images/potes/pote_polyvalent.png";
import { getAll } from "../services/directus/utils";
import Link from "next/link";

export async function getStaticProps() {
  const web = await getAll("web_service");
  const photo = await getAll("photo_service");
  const video = await getAll("video_service");
  return {
    props: {
      web: web,
      photo: photo,
      video: video,
    },
  };
}

const Services = ({ web, photo, video }) => {
  return (
    <>
      <Head>
        <title>Développement de Site Web, Contenu rédactionnel et Média, Photo et vidéo | Com&apos; Pote</title>
        <meta
          name="description"
          content="Nos prestations sur mesure. Du SEO stratégique aux technologies web en passant par la création de contenu photo et vidéo de qualité professionelle"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.overview}>
          <div className={styles.left}>
            <h1>
              Des Prestations
              <br />
              en fonction de vos besoins
            </h1>
            <div className={styles.iframe}>
              <iframe
                width="560"
                height="315"
                style={{ width: "100%", height: "100%" }}
                src="https://www.youtube.com/embed/x6eFgjnHoQ0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
          <div className={`${styles.right} not-mobile`}>
            <div className={styles.absolute}>
              <div className={styles.wrapper}>
                <Image src={pote} alt="Pote Polyvalent" layout="fill" objectFit="contain" placeholder="blur" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.services}>
          <div className={styles.lists}>
            <div className={styles.web}>
              <h2>Web</h2>
              <ol>
                {web &&
                  web.map((w) => (
                    <li key={w.id}>
                      <span>{w.name}</span>
                    </li>
                  ))}
              </ol>
            </div>
            <div className={styles.photo}>
              <h2>Photo</h2>
              <ol>
                {photo &&
                  photo.map((p) => (
                    <li key={p.id}>
                      <span>{p.name}</span>
                    </li>
                  ))}
              </ol>
            </div>
            <div className={styles.video}>
              <h2>Vidéo</h2>
              <ol>
                {video &&
                  video.map((v) => (
                    <li key={v.id}>
                      <span>{v.name}</span>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <Link href="/contact">
            <a>
              <button>Alors Interressé ?</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
