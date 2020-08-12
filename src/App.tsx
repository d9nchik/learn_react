import React from 'react';
import './App.css';


function BoilingVerdict(props: { celsius: number }) {
    if (props.celsius >= 100) {
        return <p>Вода закипить.</p>;
    }
    return <p>Вода не закипить.</p>;
}

class Calculator extends React.Component<any, { temperature: string, scale: 'c' | 'f' }> {


    constructor(props: Readonly<any>) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: "c"}
    }

    handleCelsiusChange(temperature: string) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature: string) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}

const scaleNames = {c: 'Цельсій', f: 'Фаренгейт'};

class TemperatureInput extends React.Component<{ scale: 'c' | 'f', temperature: string, onTemperatureChange: (number: string) => void }, {}> {
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        this.props.onTemperatureChange(e.currentTarget.value)
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Введіть температуру в градусах {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

function toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: (a: number) => number): string {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function App() {
    return <Calculator/>
}

export default App;