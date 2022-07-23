import Image from "next/image";
import getAssetURL from "../../services/directus/getAssets";
import styles from "./ProjectTile.module.css";

const ProjectTile = ({ project }) => {
  return (
    <div className={styles.container}>
      <Image src={getAssetURL(project.fimg.id)} alt={project.name} layout="fill" objectFit="cover" />
      <div className={styles.blind}>
        <h2>{project.name}</h2>
      </div>
    </div>
  );
};

export default ProjectTile;
