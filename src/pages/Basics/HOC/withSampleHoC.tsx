import { memo } from "react";

type PropsAreEqual<P> = (
  prevProps: Readonly<P>,
  nextProps: Readonly<P>
) => boolean;

const withSampleHoC = <P extends {}>(
  component: {
    (props: P): Exclude<React.ReactNode, undefined>;
    displayName?: string;
  },
  propsAreEqual?: PropsAreEqual<P> | false,

  componentName = component.displayName ?? component.name
): {
  (props: P): JSX.Element;
  displayName: string;
} => {
  function WithSampleHoc(props: P) {
    //Do something special to justify the HoC.
    return component(props) as JSX.Element;
  }

  WithSampleHoc.displayName = `withSampleHoC(${componentName})`;

  let wrappedComponent =
    propsAreEqual === false
      ? WithSampleHoc
      : memo(WithSampleHoc, propsAreEqual);

  //copyStaticProperties(component, wrappedComponent);

  return wrappedComponent as typeof WithSampleHoc;
};

export default withSampleHoC;

/**
此代码满足以下条件：
- 允许组件返回有效元素 ( strings | array | boolean | null | number) 而不仅仅是JSX.Element | null.
- 除非您选择退出，否则将其包装在memo中。
- 移除嵌套组件，因此 React Dev 工具将只显示一个组件。
- 在 React Dev Tool 中用注释指示displayName这是一个包裹在两个 HoC 中的组件
- 可选：复制可能已在原始组件上定义的静态属性。
 */
