import { Button, Card } from "antd";
import { Component } from "react";

interface BProps {
  message: string;
}

interface BState {
  count: number;
}

/**
 * 1，为什么要注释state两次？
注释类属性并不是绝对必要的state，但它允许在访问this.state和初始化状态时更好地进行类型推断。
这是因为它们以两种不同的方式工作，第二个泛型类型参数将允许this.setState()正确工作，因为该方法来自基类，
但state在组件内部初始化会覆盖基类实现，因此您必须确保告诉编译器你实际上并没有做任何不同的事情。

2，不需要readonly
你经常看到示例代码包括readonly标记 props 和 state 不可变：
type MyProps = {
  readonly message: string;
};
type MyState = {
  readonly count: number;
};
这不是必需的，因为React.Component<P,S>已经将它们标记为不可变的。
 * 
 */
export default class BasicsDemo extends Component<BProps, BState> {
  // 类属性：如果您需要声明类属性以备后用，只需像这样声明state即可，但不要赋值：
  pointer!: number; // like this

  state: BState = {
    count: 0,
  };

  componentDidMount() {
    this.pointer = 3;
  }

  // 类方法：像往常一样做，但要记住你的函数的任何参数也需要输入：
  increment = (amt: number) => {
    // like this
    this.setState((state) => ({
      count: state.count + amt,
    }));
  };

  render() {
    return (
      <Card title="BasicsDemo">
        <Button onClick={() => this.increment(1)}>
          {this.props.message} - {this.state.count} and {this.pointer}
        </Button>
      </Card>
    );
  }
}
