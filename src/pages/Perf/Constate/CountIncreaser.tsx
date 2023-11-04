import { Button } from "antd";
import { useIncrease } from "./CounterProvider";

function CountIncreaser() {
  const increase = useIncrease();

  console.log("CountIncreaser");

  return <Button onClick={increase}>+ Increase</Button>;
}

export default CountIncreaser;
