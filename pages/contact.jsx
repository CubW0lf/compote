import { GrCheckmark } from "react-icons/gr";
import styles from "../styles/Contact.module.css";
import { useForm } from "react-hook-form";
import { createItem } from "../services/directus/utils";
import { useUxContext } from "../contexts/uxContext";
import Flash from "../components/Flash/Flash";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  const { flash, flashType, handleFlash } = useUxContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({ mode: "onChange" });

  const submit = async (data) => {
    await createItem("message", data)
      .then(() => handleFlash("success", "Votre message a bien été envoyé", 3000))
      .catch((err) => handleFlash("error", err, 3000));
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
                  placeholder="Jean"
                  id="firstname"
                  defaultValue=""
                  {...register("firstname", { required: true, minLength: 3, maxLength: 20 })}
                />
                {dirtyFields.firstname && !errors.firstname && <GrCheckmark className={styles.mark} />}
                <label htmlFor="firstname" className={styles.label}>
                  Prénom
                </label>
              </div>
              {errors.firstname?.type === "required" && <p className="error">Le prénom est requis</p>}
              {errors.firstname?.type === "minLength" && (
                <p className="error">Le prénom doit comporter au moins 3 caractères</p>
              )}
              {errors.firstname?.type === "maxLength" && (
                <p className="error">Le prénom doit comporter moins de 20 caractères</p>
              )}
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Dujardin"
                  id="lastname"
                  defaultValue=""
                  {...register("lastname", { required: true, minLength: 3, maxLength: 20 })}
                />
                {dirtyFields.lastname && !errors.lastname && <GrCheckmark className={styles.mark} />}
                <label htmlFor="lastname" className={styles.label}>
                  Nom
                </label>
              </div>
              {errors.lastname?.type === "required" && <p className="error">Le nom de famille est requis</p>}
              {errors.lastname?.type === "minLength" && (
                <p className="error">Le nom de famille doit comporter au moins 3 caractères</p>
              )}
              {errors.lastname?.type === "maxLength" && (
                <p className="error">Le nom de famille doit comporter moins de 20 caractères</p>
              )}
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="email"
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
              </div>
              {errors.email?.type === "pattern" && (
                <p className="error">L&apos;email doit avoir la forme nom@domain.extension</p>
              )}
              {errors.email?.type === "required" && <p className="error">L&apos;email est requis</p>}
            </div>

            <div className={styles.column}>
              <div className={styles.inputContainer}>
                <textarea
                  className={styles.textarea}
                  id="message"
                  defaultValue=""
                  {...register("message", { required: true })}
                ></textarea>
                {dirtyFields.message && !errors.message && <GrCheckmark className={styles.markText} />}
                <label htmlFor="message" className={styles.label}>
                  Votre Message
                </label>
              </div>
              {errors.message?.type === "required" && <p className="error">Le message est requis</p>}
            </div>
          </div>
          <div className={styles.checkbox}>
            <label htmlFor="accept">
              J&apos;accepte les conditions de gestions et de traitement de mes informations{" "}
              <Link href="/">
                <a>Informations sur le traitement des données</a>
              </Link>
            </label>
            <input type="checkbox" name="accept" id="accept" />
          </div>
          <button type="submit" className={styles.submit}>
            Envoyer
          </button>
        </form>
        {flash && <Flash type={flashType} text={flash} />}
      </div>
    </>
  );
};

export default Contact;
