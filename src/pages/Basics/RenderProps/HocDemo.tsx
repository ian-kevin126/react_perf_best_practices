import React, { MouseEvent } from "react";

interface IProps {
  x: number;
  y: number;
}

/**
 * 逻辑复用还有一种方式就是高阶函数（HOC），是可以达到相同的效果的，代码如下：
 */
const withMouse = (Component: React.FC<IProps>) => {
  return class extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      });
    };

    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          <Component {...this.props} {...this.state} />
        </div>
      );
    }
  };
};

// 使用的时候也很简单，谁想获得高阶函数注入的 x 和 y 属性的话，就用 withMouse 包裹一下就好了：
function Tracker(props: IProps) {
  return (
    <div style={{ height: "200px" }}>
      {props.x},{props.y}
    </div>
  );
}

const HocDemo = withMouse(Tracker);
// 但是这种写法总是没有 Render Props 那么直观，万一原来的组件也有 x 和 y 属性的话，就被覆盖了。当然 HOC 也有其使用场景，
// 例如一个通用的高阶函数，用于判断组件的访问权限，有权限则显示，无权限则跳转。

export default HocDemo;
