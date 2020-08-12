import React from 'react';
import './App.css';


function BoilingVerdict(props: { celsius: number }) {
    if (props.celsius >= 100) {
        return <p>Вода закипить.</p>;
    }
    return <p>Вода не закипить.</p>;
}

class Calculator extends React.Component<any, { temperature: string }> {

    render() {
        return (
            <div>
                <TemperatureInput scale="c"/>
                <TemperatureInput scale="f"/>
            </div>
        );
    }
}

const scaleNames = {c: 'Цельсій', f: 'Фаренгейт'};

class TemperatureInput extends React.Component<{ scale: 'c' | 'f' }, { temperature: string }> {
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({temperature: e.currentTarget.value});
    }

    render() {
        const temperature = this.state.temperature;
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