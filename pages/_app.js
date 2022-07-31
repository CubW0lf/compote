import Layout from "../components/UI/Layout/Layout";
import { UxWrapper } from "../contexts/uxContext";
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/framework.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <UxWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UxWrapper>
    </>
  );
}

export default MyApp;
