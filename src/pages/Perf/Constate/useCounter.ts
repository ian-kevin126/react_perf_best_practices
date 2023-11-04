import { useState, useCallback } from "react";

function useCounter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const increase = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return { count, increase, decrease };
}

export default useCounter;
