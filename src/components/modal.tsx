import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useContext, useEffect } from "react";

import { ModalContext } from "../context/context";

function Modal() {
  const { showModal, closeModal, modalProps, setModalprops } =
    useContext(ModalContext);

  const callBack = modalProps.callBack;

  const handleClose = () => {
    closeModal();
  };

  const handleConfirm = () => {
    callBack();
    closeModal();
  };

  if (!showModal) return null;

  return (
    <Dialog
      open={showModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{modalProps.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {modalProps.subTitle}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleConfirm}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
