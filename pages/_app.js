import Layout from "../components/Layout/Layout";
import { UxWrapper } from "../contexts/uxContext";
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/swiper.css";

function MyApp({ Component, pageProps }) {
  return (
    <UxWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UxWrapper>
  );
}

export default MyApp;
