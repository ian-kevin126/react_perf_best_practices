import {
  createRef,
  PureComponent,
  forwardRef,
  ReactNode,
  Component,
  Ref,
} from "react";

interface Props {
  children?: ReactNode;
  type: "submit" | "button";
}
export type RefType = HTMLButtonElement;

export const FancyButton1 = forwardRef<RefType, Props>((props, ref) => (
  <button ref={ref} className="MyClassName" type={props.type}>
    {props.children}
  </button>
));

// ref的位置是可变的，可以根据需要获取
export const FancyButton2 = forwardRef(
  (
    props: Props,
    ref: Ref<HTMLButtonElement> // <-- here!
  ) => (
    <button ref={ref} type={props.type}>
      {props.children}
    </button>
  )
);

class CssThemeProvider extends PureComponent<Props> {
  private rootRef = createRef<HTMLDivElement>(); // like this

  render() {
    return <div ref={this.rootRef}>{this.props.children}</div>;
  }
}

export default class BasicDemo extends Component {
  render() {
    return <CssThemeProvider children={<div />} type={"submit"} />;
  }
}
