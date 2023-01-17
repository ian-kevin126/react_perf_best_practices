import React from "react";
import { ClickableList as ClickableList1 } from "./Option1";
import { ClickableList as ClickableList2 } from "./Option2";

type WithChildren<T = {}> = T & { children?: React.ReactNode };

type ButtonProps = WithChildren<JSX.IntrinsicElements["button"]>;

//  文章来自：https://fettblog.eu/typescript-react-generic-forward-refs/

/**
 * 为 React.forwardRef 提供类型通常非常简单。 @types/react 提供的类型具有通用类型变量，
 * 您可以在调用 React.forwardRef 时设置这些变量。在这种情况下，显式注释您的类型是可行的方法！
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button {...props} ref={ref}>
      {props.children}
    </button>
  )
);

export default function AdvancedDemo() {
  const reference = React.useRef<HTMLButtonElement>(null);
  const ref = React.createRef<HTMLUListElement>();
  const items = [1, 2, 3, 4];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button className="yolo" ref={reference}>
        Hello
      </Button>
      <ClickableList1
        ref={ref}
        items={items}
        onSelect={(item) => console.log(ref, item)}
      />
      <ClickableList2
        mRef={ref}
        items={items}
        onSelect={(item) => console.log(ref, item)}
      />
    </div>
  );
}
