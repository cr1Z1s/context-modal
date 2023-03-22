import { FC, PropsWithChildren, createContext, useState } from "react";

type ContextValue = {
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  callBack: () => void;
  setCallback: React.Dispatch<React.SetStateAction<() => void>>;
};

export const ModalContext = createContext<ContextValue>({} as ContextValue);

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [title, setTitle] = useState("");

  const [callBack, setCallback] = useState(
    () => () => console.log("default ooops")
  );

  const contextValue = {
    showModal,
    openModal,
    closeModal,
    title,
    setTitle,
    callBack,
    setCallback,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
