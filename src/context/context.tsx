import { FC, PropsWithChildren, createContext, useState } from "react";

import Modal from "../components/modal";

type ContextValue = {
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalProps: ModalProps;
  setModalprops: React.Dispatch<React.SetStateAction<ModalProps>>;
};

type ModalProps = { callBack: () => void; title: string; subTitle: string };

export const ModalContext = createContext<ContextValue>({} as ContextValue);

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [modalProps, setModalprops] = useState<ModalProps>({
    callBack: () => null,
    title: "",
    subTitle: "",
  });
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, openModal, closeModal, modalProps, setModalprops }}
    >
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};
