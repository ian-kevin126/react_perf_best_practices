import { Button, Card, Divider } from "antd";
import { ReactNode, useState } from "react";

function Logger(props) {
  console.log(`${props.label} rendered`);
  return null;
}

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <Card title="普通组件">
      <Button type="primary" onClick={increment}>
        count: {count}
      </Button>
      <Logger label="counter" />
    </Card>
  );
}

function CompositionCounter(props: { logger: ReactNode }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <Card title="组合组件">
      <Button type="primary" onClick={increment}>
        count: {count}
      </Button>
      {props.logger}
    </Card>
  );
}

const ComposCounter = () => (
  <div>
    <Counter />
    <Divider />
    <CompositionCounter logger={<Logger label="counter" />} />
  </div>
);

export default ComposCounter;
