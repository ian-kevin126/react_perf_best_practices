import { Input } from "antd";
import React, { ChangeEvent } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

interface IProps {
  scale: string;
  temperature: string;
  onTemperatureChange: (temperature: string) => void;
}

interface IState {
  temperature: string;
}

class TemperatureInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    console.log("render TemperatureInput");
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <Input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
