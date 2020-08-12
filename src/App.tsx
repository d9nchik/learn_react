import React from 'react';
import './App.css';


function BoilingVerdict(props: { celsius: number }) {
    if (props.celsius >= 100) {
        return <p>Вода закипить.</p>;
    }
    return <p>Вода не закипить.</p>;
}

class Calculator extends React.Component<any, { temperature: string }> {
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
        return (
            <fieldset>
                <legend>Введіть температуру в градусах Цельсія:</legend>
                <input value={temperature} onChange={this.handleChange}/> <BoilingVerdict
                celsius={parseFloat(temperature)}/></fieldset>
        );
    }
}

function App() {
    return <Calculator/>
}

export default App;