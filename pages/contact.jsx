import styles from "../styles/Contact.module.css";
import { useForm } from "react-hook-form";
import { createItem, find } from "../services/directus/utils";
import { useUxContext } from "../contexts/uxContext";
import Flash from "../components/Flash/Flash";
import Head from "next/head";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("../components/Modal/Modal"), { ssr: false });
import { FaCircle } from "react-icons/fa";
import Input from "../components/Input/Input";
import Image from "next/image";
import pote from "../public/assets/images/potes/pote_facteur.png";
import plane from "../public/assets/images/plane.png";

export async function getStaticProps() {
  const policy = await find("page", 1);
  return {
    props: {
      policy: policy,
    },
  };
}

const Contact = ({ policy }) => {
  const { flash, flashType, handleFlash, modalVisible, toggleModalVisibility } = useUxContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({ mode: "onChange" });

  const submit = async (data) => {
    await createItem("message", data)
      .then(() => {
        handleFlash("success", "Votre message a bien été envoyé", 3000);
      })
      .catch((err) => handleFlash("error", err, 3000));
  };

  const handleModal = () => {
    toggleModalVisibility(!modalVisible);
  };

  return (
    <>
      <Head>
        <title>Formulaire de contact devis et questions | ComPote</title>
        <meta
          name="description"
          content="Formulaire de contact pour demander un devis, poser une question ou faire une remarque voire demander une collaboration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>
          Contact : Bienvenue à la Com&apos; Po(s)te
          <div className={styles.plane}>
            <div className={styles.planeWrapper}>
              <Image src={plane} alt="" layout="fill" objectFit="contain" objectPosition="top left" />
            </div>
          </div>
        </h1>
        <h2>Si vous souhaitez me contacter, pour une question, un projet, une demande de devis... c’est par ici !</h2>
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <p>Remplissez ce formulaire et je vous recontacterai au plus vite</p>
          <div className={styles.formContainer}>
            <div className={styles.column}>
              <Input
                {...register("firstname", {
                  required: { value: true, message: "Requis" },
                  minLength: { value: 3, message: "Au moins 3 caractères" },
                  maxLength: { value: 20, message: "Maximum 20 caractères" },
                })}
                error={errors.firstname}
                dirty={dirtyFields.firstname}
                label="Prénom"
                id="firstname"
                placeholder="Louis"
                defaultValue=""
              />
              <Input
                {...register("lastname", {
                  required: { value: true, message: "Requis" },
                  minLength: { value: 3, message: "Au moins 3 caractères" },
                  maxLength: { value: 20, message: "Maximum 20 caractères" },
                })}
                error={errors.lastname}
                dirty={dirtyFields.lastname}
                label="Nom"
                id="lastname"
                placeholder="De Funès"
                defaultValue=""
              />

              <Input
                {...register("email", {
                  required: { value: true, message: "Requis" },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "nom@domain.extension",
                  },
                })}
                error={errors.email}
                dirty={dirtyFields.email}
                label="Email"
                id="email"
                placeholder="gendarme@stropez.fr"
                defaultValue=""
              />
            </div>

            <div className={styles.column}>
              <Input
                {...register("message", {
                  required: { value: true, message: "Requis" },
                })}
                error={errors.message}
                dirty={dirtyFields.message}
                type="textarea"
                label="Message"
                id="message"
                placeholder="Votre Message"
                defaultValue=""
              />
            </div>
          </div>
          <div className={styles.policy}>
            <div className={styles.switch}>
              <input type="checkbox" id="accept" {...register("privacy_policy", { required: true })} />
              <label htmlFor="accept" tabIndex="0">
                <span>
                  J&apos;accepte les conditions de gestions et de traitement de mes informations{" "}
                  <a onClick={handleModal}>Informations sur le traitement des données</a>
                </span>
                <div className={styles.toggle}>
                  <FaCircle />
                </div>
              </label>
            </div>
            {errors.privacy_policy?.type === "required" && (
              <p className="error">Vous devez accepter la politique de confidentialité</p>
            )}
          </div>
          <button type="submit" className={styles.submit}>
            Envoyer
          </button>
        </form>
        {flash && <Flash type={flashType} text={flash} />}
        <div className={styles.pote}>
          <div className={styles.wrapper}>
            <Image src={pote} alt="Petit pote facteur" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      {policy && <Modal content={policy} />}
    </>
  );
};

export default Contact;
