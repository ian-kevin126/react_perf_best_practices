import Count from "./Count";
import CountIncreaser from "./CountIncreaser";
import CountDecreaser from "./CountDecreaser";
import CounterProvider from "./CounterProvider";

/**
 *
 * constate是一个简单的包，可以将你的上下文值分成多个部分。
 * 如果您查看它的源代码，您会发现它只有几行代码，但却是一个巧妙的设计！
 * constate 只是将上下文值与您提供的函数分开，并创建多个嵌套的提供程序。
 * 所以，如果你想使用上下文值的一部分，你只需使用上下文和专用于该部分的钩子。
 */
function Constate() {
  return (
    <CounterProvider initialCount={5}>
      <Count />
      <CountIncreaser />
      <CountDecreaser />
    </CounterProvider>
  );
}

export default Constate;
