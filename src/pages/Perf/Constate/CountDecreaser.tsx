import { Button } from "antd";
import { useDecrease } from "./CounterProvider";

function CountDecreaser() {
  const decrease = useDecrease();

  console.log("CountDecreaser");

  return <Button onClick={decrease}>- Decrease</Button>;
}

export default CountDecreaser;
