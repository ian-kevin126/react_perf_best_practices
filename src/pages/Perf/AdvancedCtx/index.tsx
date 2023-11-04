import { useEffect } from "react";
import ModalComp from "./components/ModalComp";
import Nav from "./components/Nav";
import ContextProvider from "./components/ContextProvider";
import "./index.scss";

export default function AdvancedCtx() {
  useEffect(() => {
    console.log(">> Rendering APP");
  });

  return (
    <ContextProvider>
      <Nav />
      <ModalComp />
    </ContextProvider>
  );
}
