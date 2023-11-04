import { useState } from "react";
import { ContextAction, ContextValue } from "./Context";

export default function ContextProvider({ children }) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <ContextAction.Provider value={setShow}>
      <ContextValue.Provider value={show}>{children}</ContextValue.Provider>
    </ContextAction.Provider>
  );
}
