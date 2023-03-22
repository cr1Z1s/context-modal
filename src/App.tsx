import "./App.css";

import { useEffect, useState } from "react";

import CmponentOne from "./components/component1";
import ComponentOne from "./components/component1";
import Modal from "./components/modal";
import { ModalProvider } from "./context/context";
import reactLogo from "./assets/react.svg";
import { responsivePropType } from "@mui/system";
import viteLogo from "/vite.svg";

function App() {
  useEffect(() => {
    console.log("app is rendered");
  }, []);

  return (
    <ModalProvider>
      <div className="App">
        here some component:
        <ComponentOne />
        <Modal />
      </div>
    </ModalProvider>
  );
}

export default App;
