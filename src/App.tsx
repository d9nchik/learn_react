import React from 'react';
import './App.css';
function App() {
    return (
        <Clock/>
    );
}

type ClockProps = { date: Date };

class Clock extends React.Component<any, ClockProps> {
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (<div><h1>Привіт, світе!</h1>      <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2></div>)
    }
}

export default App;