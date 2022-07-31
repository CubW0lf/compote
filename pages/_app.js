import Layout from "../components/UI/Layout/Layout";
import { UxWrapper } from "../contexts/uxContext";
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/swiper.css";
import "../styles/framework.css";

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
