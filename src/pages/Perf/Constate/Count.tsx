import { useCount } from "./CounterProvider";

function Count() {
  const count = useCount();

  console.log("Count");

  return <div>Count is: {count}</div>;
}

export default Count;
