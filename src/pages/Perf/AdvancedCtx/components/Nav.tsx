import { useContext, useEffect } from "react";

import { ContextAction } from "./Context";
import { Button } from "antd";

export default function Nav() {
  const setShow = useContext(ContextAction);

  useEffect(() => {
    console.log(">> Rendering NAV");
  });

  return (
    <nav>
      <Button>Link 1</Button>
      <Button>Link 2</Button>
      <Button>Link 3</Button>
      <Button type="primary" onClick={() => setShow!(true)}>
        |||
      </Button>
    </nav>
  );
}
