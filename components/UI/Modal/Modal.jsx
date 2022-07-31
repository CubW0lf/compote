import { Dialog } from "@headlessui/react";
import { useRef } from "react";
import { useUxContext } from "../../../contexts/uxContext";
import styles from "./Modal.module.css";

const Modal = ({ content }) => {
  const { modalVisible, toggleModalVisibility } = useUxContext();

  const backdrop = useRef();

  return (
    <Dialog open={modalVisible} onClose={() => toggleModalVisibility(false)}>
      <Dialog.Panel className={styles.container}>
        <Dialog.Title>{content && content.title}</Dialog.Title>
        {content && <div dangerouslySetInnerHTML={{ __html: content.text }}></div>}
        <button onClick={() => toggleModalVisibility(false)}>Fermer</button>
      </Dialog.Panel>
      <Dialog.Overlay
        ref={backdrop}
        className={styles.backdrop}
        onClick={() => toggleModalVisibility(false)}
      ></Dialog.Overlay>
    </Dialog>
  );
};

export default Modal;
