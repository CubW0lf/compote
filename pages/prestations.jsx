import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Services.module.css";
import pote from "../public/assets/images/potes/pote_polyvalent.png";
import { getAll } from "../services/directus/utils";

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
        <title>Prestations en détail | ComPote</title>
        <meta name="description" content="Nos prestations sur mesure. Web, Photo, Vidéo etc..." />
        <link rel="icon" href="/favicon.ico" />
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
                src="https://www.youtube.com/embed/I4hCp5ZETb8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
          <div className={styles.right}>
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
              <ul>{web && web.map((w) => <li key={w.id}>{w.name}</li>)}</ul>
            </div>
            <div className={styles.photo}>
              <h2>Photo</h2>
              <ul>{photo && photo.map((p) => <li key={p.id}>{p.name}</li>)}</ul>
            </div>
            <div className={styles.video}>
              <h2>Vidéo</h2>
              <ul>{video && video.map((v) => <li key={v.id}>{v.name}</li>)}</ul>
            </div>
          </div>
          <button>Alors Interressé ?</button>
        </div>
      </div>
    </>
  );
};

export default Services;
