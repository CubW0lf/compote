import Head from "next/head";
import Landing from "../components/Landing/Landing";
import Overview from "../components/Overview/Overview";
import Quote from "../components/Quote/Quote";
import dynamic from "next/dynamic";
const Reviews = dynamic(() => import("../components/Reviews/Reviews"), { ssr: false });
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
        <title>Agence Web &amp; Media à Reims | Com&apos; Pote</title>
        <meta
          name="description"
          content="Com' Pote c'est votre assistant communication tout en un. Développement Web, SEO, DevOps, contenu rédactionnel, photo et vidéo."
        />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimal-ui"></meta>
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
