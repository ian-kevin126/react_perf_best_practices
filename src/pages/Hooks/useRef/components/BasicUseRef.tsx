import { Button, Card } from "antd";
import { useEffect, useRef } from "react";

/*
根据useRef 挂钩类型定义。
function useRef<T>(initialValue: T): MutableRefObject<T>;
function useRef<T>(initialValue: T|null): RefObject<T>;
function useRef<T = undefined>(): MutableRefObject<T | undefined>;

const ref1 = React.useRef<HTMLSpanElement>(null!);       //MutableRefObject
const ref2 = React.useRef<HTMLSpanElement>(null);        //RefObject
const ref3 = React.useRef<HTMLSpanElement | null>(null); //MutableRefObject

这些 ref 匹配前两个类型定义。
- 对于 ref1，我们将 initialValue 定义为非空（非空断言运算符），因此它匹配第一个类型并返回一个 MutableRefObject。
- 对于 ref2，我们将 initialValue 定义为 null，以便它匹配第二个类型并返回一个 RefObject。
- 对于 ref3，我们将通用参数定义为 HTMLSpanElement | null 且 initialValue 为 null，因此它匹配第一个类型并返回一个 MutableRefObject。
*/

function BasicsUseRef() {
  // - If possible, prefer as specific as possible. For example, HTMLDivElement
  //   is better than HTMLElement and way better than Element.
  // - Technical-wise, this returns RefObject<HTMLDivElement>
  const divRef = useRef<HTMLDivElement>(null);
  // Technical-wise, this returns MutableRefObject<number | null>
  const intervalRef = useRef<number | null>(null);

  // useRef的初始化：https://github.com/typescript-cheatsheets/react/issues/388
  const ref1 = useRef<HTMLDivElement>(null!); // MutableRefObject
  const ref2 = useRef<HTMLDivElement>(null); // RefObject

  useEffect(() => {
    console.log(ref1.current.innerHTML);
    // TypeScript won't require null-check e.g. ref1 && ref1.current

    // 这种会检查
    // console.log(ref2.current.innerHTML);
    // Type error: Object is possibly 'null'.
  });

  useEffect(() => {
    // Note that ref.current may be null. This is expected, because you may
    // conditionally render the ref-ed element, or you may forgot to assign it
    if (!divRef.current) throw Error("divRef is not assigned");

    // Now divRef.current is sure to be HTMLDivElement
    //   doSomethingWith(divRef.current);
  });

  // You manage the ref yourself (that's why it's called MutableRefObject!)
  useEffect(() => {
    // 需要注意的是：这里要使用window下的setInterval方法，才会返回一个number类型的值
    const timer = window.setInterval(() => {
      console.log("interval timer");
    }, 1000);
    intervalRef.current = timer;
    return () => clearInterval(intervalRef.current as any);
  }, []);

  const handleCancelInterval = () => {
    clearInterval(intervalRef.current as any);
  };

  // Give the ref to an element so React can manage it for you
  return (
    <Card title="useRef 基本用法" ref={divRef}>
      <div>BasicsUseRef</div>
      <div ref={ref1}> etc </div>
      <div ref={ref2}> etc </div>
      <Button onClick={handleCancelInterval}>Cancel timer</Button>
    </Card>
  );
}

export default BasicsUseRef;
