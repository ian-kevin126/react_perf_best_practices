import { Component } from "react";
import withTheme from "./withTheme";
import withSampleHoC from "./withSampleHoC";
import { Button, Card } from "antd";

interface WithThemeProps {
  primaryColor: string;
}

interface Props extends WithThemeProps {
  children?: React.ReactNode;
}

class MyButton extends Component<Props> {
  public render() {
    // Render an the element using the theme and other props.
    return <Card title="MyButton1">{this.props.children}</Card>;
  }

  private someInternalMethod() {
    // The theme values are also available as props here.
  }
}

/**
 * <MyButton>Hello button</MyButton> // Valid
 * <MyButton primaryColor="#333">Hello Button</MyButton> // Also valid
 */

const InnerComp = () => (
  <Card title="MyButton2">
    <Button>按钮</Button>
  </Card>
);

const HOCDemos = {
  MyButton1: withTheme(MyButton),
  MyButton2: withSampleHoC(InnerComp),
};

export default HOCDemos;
