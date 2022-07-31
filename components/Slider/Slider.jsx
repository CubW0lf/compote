import getAssetURL from "../../services/directus/getAssets";
import Link from "next/link";
import Image from "next/image";
import styles from "./Slider.module.css";
import { shimmer, toBase64 } from "../../services/utils";
import dynamic from "next/dynamic";
const NativeSlider = dynamic(() => import("../UI/NativeSlider/NativeSlider"));

const Slider = ({ slides }) => {
  return (
    <div className={styles.container}>
      <NativeSlider slides={slides}>
        {slides &&
          slides.map((s) => (
            <div className={styles.slide} key={s.id}>
              <Link href={s.url}>
                <a>
                  <h2 dangerouslySetInnerHTML={{ __html: s.title }}></h2>
                </a>
              </Link>
              <Image
                src={getAssetURL(s.fimg.id)}
                alt=""
                layout="fill"
                objectFit="cover"
                priority="true"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
              <div className={styles.pote}>
                <div className={styles.poteWrapper}>
                  <Image
                    src={getAssetURL(s.pote.id)}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    priority="true"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                </div>
              </div>
            </div>
          ))}
      </NativeSlider>
    </div>
  );
};

export default Slider;
