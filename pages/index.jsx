import Head from "next/head";
import Landing from "../components/Landing/Landing";
import Overview from "../components/Overview/Overview";
import Quote from "../components/Quote/Quote";
import Reviews from "../components/Reviews/Reviews";
import { find, getAll } from "../services/directus/utils";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const slides = await getAll("slide");
  const overview = await find("page", 2);
  const reviews = await getAll("review");
  return {
    props: {
      slides: slides,
      overview: overview,
      reviews: reviews,
    },
  };
}

export default function Home({ slides, overview, reviews }) {
  return (
    <>
      <Head>
        <title>Développement de Site Web et Média Photo et vidéo | ComPote</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Landing slides={slides} />
        <Overview page={overview} />
        <Reviews reviews={reviews} />
        <Quote />
      </div>
    </>
  );
}
