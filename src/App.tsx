import React from 'react';
import './App.css';

function App() {
    return (
        <Clock/>
    );
}

type ClockProps = { date: Date };

class Clock extends React.Component<any, ClockProps> {
    private timerID?: NodeJS.Timeout;

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            date: new Date()
        }
    }


    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1_000)
    }


    componentWillUnmount() {
        if (this.timerID instanceof NodeJS.Timeout) {
            clearInterval(this.timerID)
        }
    }


    render() {
        return (<div><h1>Привіт, світе!</h1>      <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2></div>)
    }

    private tick() {
        this.setState({date: new Date()})
    }
}

export default App;