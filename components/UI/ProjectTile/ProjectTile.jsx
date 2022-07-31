import Image from "next/image";
import getAssetURL from "../../../services/directus/getAssets";
import { shimmer, toBase64 } from "../../../services/utils";
import styles from "./ProjectTile.module.css";

const ProjectTile = ({ project }) => {
  return (
    <div className={styles.container}>
      <Image
        src={getAssetURL(project.fimg.id)}
        alt={project.name}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
      <div className={styles.blind}>
        <h2>{project.name}</h2>
      </div>
    </div>
  );
};

export default ProjectTile;
