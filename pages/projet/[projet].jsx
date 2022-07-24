import Image from "next/image";
import { MdLanguage } from "react-icons/md";
import getAssetURL from "../../services/directus/getAssets";
import { find, getAll } from "../../services/directus/utils";
import styles from "../../styles/ProjectSingle.module.css";

export async function getStaticPaths() {
  const projects = await getAll("web_project");

  const paths = projects.map((item) => ({
    params: { projet: item.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.projet;
  const projet = await find("web_project", id);
  return {
    props: {
      projet,
    },
    revalidate: 30,
  };
}

const ProjectSingle = ({ projet }) => {
  return (
    <section className={styles.container}>
      <main>
        <div className={styles.fimg}>
          <Image src={getAssetURL(projet.fimg.id)} alt={projet.name} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.infos}>
          <h1>{projet.name}</h1>
          <div className={styles.tags}>
            {projet.tools &&
              projet.tools.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
          </div>
          {projet.description && (
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: projet.description }}></div>
          )}
          <a href={projet.url}>
            <button className={styles.button}>
              Voir le site <MdLanguage />
            </button>
          </a>
        </div>
      </main>
      <div className={styles.mockups}>
        {projet.mockups &&
          projet.mockups
            .sort((a, b) => a.directus_files_id.title - b.directus_files_id.title)
            .map((m) => (
              <div className={styles.wrapper} key={m.directus_files_id.id}>
                <Image
                  src={getAssetURL(m.directus_files_id.id)}
                  alt=""
                  layout="responsive"
                  width={m.directus_files_id.width}
                  height={m.directus_files_id.height}
                />
              </div>
            ))}
      </div>
    </section>
  );
};

export default ProjectSingle;