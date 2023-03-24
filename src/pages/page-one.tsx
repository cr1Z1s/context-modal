import React, { useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import { ModalContext } from "../context/context";

function PageOne() {
  const navigate = useNavigate();
  const { openModal, setModalprops } = useContext(ModalContext);

  const handleClick = () => {
    openModal();
    setModalprops({
      title: "go to page two",
      subTitle: "are you sure you want to go to page two?",
      callBack: () => {
        console.log("redirecting");
        navigate("/page-two");
      },
    });
  };
  return (
    <div>
      <h3>Page one</h3>
      <Button onClick={handleClick}>go to page two</Button>
    </div>
  );
}

export default PageOne;
