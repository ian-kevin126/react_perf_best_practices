import { Card } from "antd";
import { isEqual } from "lodash";
import { PureComponent } from "react";

type CustomValue = any;

interface Props {
  propA: CustomValue;
}

interface DefinedState {
  otherStateField: string;
}

type State = DefinedState & ReturnType<typeof transformPropsToState>;

function transformPropsToState(props: Props) {
  return {
    savedPropA: props.propA, // save for memoization
    derivedState: props.propA,
  };
}

class GDSFPDemo extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      otherStateField: "123",
      ...transformPropsToState(props),
    };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    if (isEqual(props.propA, state.savedPropA)) return null;
    return transformPropsToState(props);
  }

  render() {
    return (
      <Card title="GDSFPDemo">
        <div>propA: {this.props.propA}</div>
        <div>derivedState: {this.state.derivedState}</div>
        <div>savedPropA: {this.state.savedPropA}</div>
        <div>otherStateField: {this.state.otherStateField}</div>
      </Card>
    );
  }
}

export default GDSFPDemo;
