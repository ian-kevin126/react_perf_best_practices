import React, { MouseEvent } from "react";

interface IProps {
  render: Function;
}

interface IState {
  x: number;
  y: number;
}

class MouseTracker extends React.Component<IProps, IState> {
  state = {
    x: 0,
    y: 0,
  };

  handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

/**
 * 如果像上面写的一样，在 render 方法里面创建 render 函数的话，每次渲染都会创建一个新的函数，
 * 如果你的类继承自 PureComponent 的话，其实是没有起到作用的，
 * 
class BasicDemo extends React.PureComponent {
  render() {
    return (
      <MouseTracker render={props => (
          <div style={{ height: '100vh' }}>
            {props.x},{props.y}
          </div>
        )}
      />
    )
  }
}
 * 
 * 所以建议写成下面这个样子：
 */
class BasicDemo extends React.PureComponent {
  renderView(props: IState) {
    return (
      <div style={{ height: "200px" }}>
        {props.x},{props.y}
      </div>
    );
  }

  render() {
    return <MouseTracker render={this.renderView} />;
  }
}

export default BasicDemo;
