/*
根据这条推文(https://twitter.com/dan_abramov/status/1133878326358171650)，
defaultProps 最终将被弃用。您可以在此处查看讨论：

函数组件：
type GreetProps = { age?: number };
const Greet = ({ age = 21 }: GreetProps) => // etc

类组件：
type GreetProps = {
  age?: number;
};

class Greet extends React.Component<GreetProps> {
    render() {
        const { age = 21 } = this.props;
    }
}
let el = <Greet age={3} />;

defaultProps类型推断在TypeScript 3.0+中得到了很大改进，尽管一些边缘情况仍然存在问题。
*/

import { Component } from "react";

// using typeof as a shortcut; note that it hoists!
// you can also declare the type of DefaultProps if you choose
// e.g. https://github.com/typescript-cheatsheets/react/issues/415#issuecomment-841223219

/****************** 函数组件 ******************/
type GreetProps1 = { age: number } & typeof defaultProps;

const defaultProps = {
  age: 21,
};

const Greet1 = (props: GreetProps1) => {
  // etc
};
Greet1.defaultProps = defaultProps;

/****************** 类组件 ******************/
type GreetProps = typeof Greet.defaultProps & {
  age: number;
};

class Greet extends Component<GreetProps> {
  static defaultProps = {
    age: 21,
  };
  /*...*/
}

// Type-checks! No type assertions needed!
let el = <Greet age={3} />;
