import React, { useContext } from "react";

import { Button } from "@mui/material";
import { ModalContext } from "../context/context";
import { useNavigate } from "react-router-dom";

function PageTwo() {
  const navigate = useNavigate();
  const { openModal, setModalprops } = useContext(ModalContext);

  const handleClick = () => {
    navigate("/");
    openModal();
    setModalprops({
      title: "welcome home",
      subTitle: "you are home now",
      callBack: () => null,
    });
  };

  const goToPageThree = () => {
    navigate("/page-three");
    openModal();
    setModalprops((prv) => ({
      ...prv,
      title: "welcome to page three",
      subTitle: "you are in page three now",
    }));
  };

  return (
    <div>
      <h3>Page two</h3>
      <Button onClick={handleClick}>go home</Button>
      <Button onClick={goToPageThree}> go to page three</Button>
    </div>
  );
}

export default PageTwo;
