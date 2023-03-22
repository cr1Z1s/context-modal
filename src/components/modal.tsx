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
  useEffect(() => {
    console.log("modal is rendered");
  }, []);

  const { showModal, closeModal, callBack } = useContext(ModalContext);

  const handleClose = () => {
    closeModal();
  };

  const handleConfirm = () => {
    handleClose();
    callBack();
  };

  if (!showModal) return null;
  return (
    <>
      <Dialog
        open={showModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleConfirm}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Modal;
