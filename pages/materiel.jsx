import Head from "next/head";
import { getAll } from "../services/directus/utils";
import styles from "../styles/Tools.module.css";

export async function getStaticProps() {
  const tools = await getAll("tool");
  const photo = await getAll("photo_equipment");
  const video = await getAll("video_equipment");
  return {
    props: {
      tools: tools,
      photo: photo,
      video: video,
    },
  };
}

const Tools = ({ tools, photo, video }) => {
  return (
    <>
      <Head>
        <title>Materiel photo &amp; Vidéo et technologies Web | Com&apos; Pote</title>
        <meta
          name="description"
          content="Présentation de notre materiel de qualité profesionnelle et des technologies web que nous utilisons pour s'adapter au mieux à vos projets."
        />
      </Head>
      <div className={styles.container}>
        <main>
          <div className={styles.article_wrapper}>
            <article className={styles.article} id="web">
              <h2>Web</h2>
              <div className={styles.grid}>
                {tools &&
                  tools.map((t) => (
                    <div key={t.id}>
                      <span className={styles.name}>{t.name}</span>
                      <br />
                      <span className={styles.feature}>{t.feature}</span>
                    </div>
                  ))}
              </div>
            </article>

            <article className={styles.article} id="photo">
              <h2>Photo</h2>
              <div className={styles.grid}>
                {photo &&
                  photo.map((p) => (
                    <div key={p.id}>
                      <span className={styles.name}>{p.name}</span>
                      <br />
                      <span className={styles.feature}>{p.feature}</span>
                    </div>
                  ))}
              </div>
            </article>

            <article className={styles.article} id="video">
              <h2>Video</h2>
              <div className={styles.grid}>
                {video &&
                  video.map((v) => (
                    <div key={v.id}>
                      <span className={styles.name}>{v.name}</span>
                      <br />
                      <span className={styles.feature}>{v.feature}</span>
                    </div>
                  ))}
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
};

export default Tools;
