// Countdown.tsx

import { UserInfo } from "@/types";
import { Button, Card } from "antd";
import { forwardRef, useImperativeHandle, useRef } from "react";

// Define the handle types which will be passed to the forwardRef
export type CountdownHandle = {
  start: () => void;
  userInfo: UserInfo;
};

type CountdownProps = {};

const Countdown = forwardRef<CountdownHandle, CountdownProps>((props, ref) => {
  useImperativeHandle(ref, () => ({
    // start() has type inference here
    start() {
      alert("Start");
    },
    userInfo: {
      name: "ian",
      age: 18,
    },
  }));

  return <div>Countdown</div>;
});

// The component uses the Countdown component
function ForwardRefDemo() {
  const countdownEl = useRef<CountdownHandle>(null);

  const handleShowAlert = () => {
    if (countdownEl.current) {
      // start() has type inference here as well
      countdownEl.current.start();
      console.log(countdownEl.current.userInfo);
    }
  };

  return (
    <Card title="ForwardRefDemo">
      <Countdown ref={countdownEl} />
      <Button onClick={handleShowAlert}>点击我</Button>
    </Card>
  );
}

export default ForwardRefDemo;
