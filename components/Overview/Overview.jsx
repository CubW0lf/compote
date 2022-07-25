import styles from "./Overview.module.css";
import mockup from "../../public/assets/images/about.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { find } from "../../services/directus/utils";

const Overview = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    find("page", 2)
      .then((response) => setPage(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container} id="a-propos">
      <div className={styles.mockup}>
        <Image src={mockup} alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.text}>
        <h1>{page && page.title}</h1>
        {page && <div dangerouslySetInnerHTML={{ __html: page.text }}></div>}
      </div>
    </div>
  );
};

export default Overview;
