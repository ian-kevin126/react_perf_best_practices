import constate from "constate";
import useCounter from "./useCounter";

const [CounterProvider, useCount, useIncrease, useDecrease] = constate(
  useCounter,
  (value) => value.count,
  (value) => value.increase,
  (value) => value.decrease
);

export { useCount, useIncrease, useDecrease };

export default CounterProvider;
