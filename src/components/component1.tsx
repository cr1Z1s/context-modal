import { useContext, useEffect } from "react";

import { Button } from "@mui/material";
import { ModalContext } from "../context/context";

function ComponentOne() {
  const { openModal, modalProps, setModalprops } = useContext(ModalContext);

  const onConfirm = () => console.log("on confirm function");

  const handleClick = () => {
    setModalprops((prv) => ({
      ...prv,
      callBack: () => console.log("component one action"),
      title: "Hello there",
    }));
    openModal();
  };

  return (
    <>
      <Button onClick={handleClick}>open Modal</Button>
    </>
  );
}

export default ComponentOne;
