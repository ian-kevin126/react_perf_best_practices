import * as React from "react";
import { Component, ComponentClass, createRef, forwardRef, Ref } from "react";

const myHoc = <ComposedComponentProps extends {}>(
  ComposedComponent: ComponentClass<ComposedComponentProps>
) => {
  type ComposedComponentInstance = InstanceType<typeof ComposedComponent>;

  type WrapperComponentProps = ComposedComponentProps & {
    wrapperComponentProp: number;
  };
  type WrapperComponentPropsWithForwardedRef = WrapperComponentProps & {
    forwardedRef: Ref<ComposedComponentInstance>;
  };

  class WrapperComponent extends Component<
    WrapperComponentPropsWithForwardedRef,
    {}
  > {
    render() {
      const { forwardedRef, wrapperComponentProp, ...composedComponentProps } =
        this.props;

      return (
        // <ComposedComponent
        //   ref={forwardedRef}
        //   // We need a cast because:
        //   // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32355
        //   // https://github.com/Microsoft/TypeScript/issues/28938#issuecomment-450636046
        //   {...(composedComponentProps as ComposedComponentProps)}
        // />
        <>saas</>
      );
    }
  }

  return forwardRef<ComposedComponentInstance, WrapperComponentProps>(
    (props, ref) => <WrapperComponent forwardedRef={ref} {...props} />
  );
};

type MyComponentProps = { composedComponentProp: number };
class MyComponent extends Component<MyComponentProps> {}

const ref = createRef<MyComponent>();
const badRef = createRef<ComponentClass<{}>>();

const MyComponentAfterHoc = myHoc(MyComponent);

//
// Tests
//

// should succeed:
<MyComponentAfterHoc composedComponentProp={1} wrapperComponentProp={1} />;
<MyComponentAfterHoc
  composedComponentProp={1}
  wrapperComponentProp={1}
  ref={(e) => {}}
/>;
<MyComponentAfterHoc
  composedComponentProp={1}
  wrapperComponentProp={1}
  ref={ref}
/>;

// should error:
{
  /* <MyComponentAfterHoc
  composedComponentProp={1}
  wrapperComponentProp={1}
  ref={badRef}
/>;
<MyComponentAfterHoc composedComponentProp={"1"} wrapperComponentProp={1} />;
<MyComponentAfterHoc composedComponentProp={"1"} wrapperComponentProp={"1"} />;
<MyComponentAfterHoc />; */
}
