import React from "react";
import TemperatureInput from "./components/TemperatureInput";
import { toCelsius, toFahrenheit, tryConvert } from "./utils";
import BoilingVerdict from "./components/BoilingVerdict";
import { Card } from "antd";

interface IState {
  temperature: string;
  scale: string;
}

class Calculator extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(temperature: string) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <Card>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </Card>
    );
  }
}

export default Calculator;
