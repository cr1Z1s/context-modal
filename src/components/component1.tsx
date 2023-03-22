import { useContext, useEffect } from "react";

import { Button } from "@mui/material";
import { ModalContext } from "../context/context";

function ComponentOne() {
  useEffect(() => {
    console.log("component one is rendered");
  }, []);

  const { openModal, setCallback } = useContext(ModalContext);

  const handleClick = () => {
    console.log("clicked from component one");
    setCallback(() => () => console.log("updated callback"));
    openModal();
  };

  return (
    <>
      <Button onClick={handleClick}>open Modal</Button>
    </>
  );
}

export default ComponentOne;
