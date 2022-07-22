import { GrCheckmark } from "react-icons/gr";
import styles from "../styles/Contact.module.css";
import { useForm } from "react-hook-form";
import { createItem, find } from "../services/directus/utils";
import { useUxContext } from "../contexts/uxContext";
import Flash from "../components/Flash/Flash";
import Head from "next/head";
import { useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import Checkbox from "../components/Checkbox/Checkbox";
import { FaCircle } from "react-icons/fa";

const Contact = () => {
  const { flash, flashType, handleFlash, modalVisible, toggleModalVisibility } = useUxContext();

  const [confidentiality, setConfidentiality] = useState(null);

  useEffect(() => {
    find("page", 1)
      .then((response) => setConfidentiality(response))
      .catch((err) => console.log(err));
  }, []);

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
        <h1>Contact</h1>
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <h2>Une Question, besoin d&apos;un devis ?</h2>
          <h3>Remplissez ce formulaire et je vous recontacterai au plus vite</h3>
          <div className={styles.formContainer}>
            <div className={styles.column}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Louis"
                  id="firstname"
                  defaultValue=""
                  {...register("firstname", { required: true, minLength: 3, maxLength: 20 })}
                />
                {dirtyFields.firstname && !errors.firstname && <GrCheckmark className={styles.mark} />}
                <label htmlFor="firstname" className={styles.label}>
                  Prénom
                </label>
                {errors.firstname?.type === "required" && <p className="error">Requis</p>}
                {errors.firstname?.type === "minLength" && <p className="error">Au moins 3 caractères</p>}
                {errors.firstname?.type === "maxLength" && <p className="error">Moins de 20 caractères</p>}
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="De Funès"
                  id="lastname"
                  defaultValue=""
                  {...register("lastname", { required: true, minLength: 3, maxLength: 20 })}
                />
                {dirtyFields.lastname && !errors.lastname && <GrCheckmark className={styles.mark} />}
                <label htmlFor="lastname" className={styles.label}>
                  Nom
                </label>
                {errors.lastname?.type === "required" && <p className="error">Requis</p>}
                {errors.lastname?.type === "minLength" && <p className="error">Au moins 3 caractères</p>}
                {errors.lastname?.type === "maxLength" && <p className="error">Moins de 20 caractères</p>}
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="gendarme@stropez.fr"
                  defaultValue=""
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    },
                  })}
                  id="email"
                  className={watch("email") === "" ? "empty" : ""}
                />
                {dirtyFields.email && !errors.email && <GrCheckmark className={styles.mark} />}
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                {errors.email?.type === "pattern" && <p className="error">nom@domain.extension</p>}
                {errors.email?.type === "required" && <p className="error">Requis</p>}
              </div>
            </div>

            <div className={styles.column}>
              <textarea
                className={styles.textarea}
                id="message"
                defaultValue=""
                placeholder="Votre Message"
                {...register("message", { required: true })}
              ></textarea>
              {dirtyFields.message && !errors.message && <GrCheckmark className={styles.markText} />}
              {errors.message?.type === "required" && <p className="error">Requis</p>}
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
      </div>
      <Modal content={confidentiality} />
    </>
  );
};

export default Contact;
