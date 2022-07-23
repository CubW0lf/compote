import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { createContext, useContext } from "react";

const uxContext = createContext();

export const UxWrapper = ({ children }) => {
  const [flash, setFlash] = useState("");
  const [flashType, setFlashType] = useState("");
  const [menuVisible, toggleMenuVisibility] = useState(false);
  const [modalVisible, toggleModalVisibility] = useState(false);

  const router = useRouter();

  const deleteMessage = useCallback(() => {
    setFlash("");
  }, []);

  const handleFlash = useCallback(
    (type, text, duration) => {
      setFlashType(type);
      setFlash(text);
      setTimeout(deleteMessage, duration);
    },
    [deleteMessage]
  );

  return (
    <uxContext.Provider
      value={{
        flash,
        flashType,
        handleFlash,
        menuVisible,
        toggleMenuVisibility,
        modalVisible,
        toggleModalVisibility,
      }}
    >
      {children}
    </uxContext.Provider>
  );
};

export const useUxContext = () => {
  return useContext(uxContext);
};
