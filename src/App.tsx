import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

function Welcome(props: React.AllHTMLAttributes<{ name: string }>) {
    return <h1>Привіт, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Василина"/> <Welcome name="Михайло"/> <Welcome name="Вадим"/></div>
    );
}

function Clock(props: { date: Date }) {
    return (<div><h1>Привіт, світе!</h1>      <h2>Зараз {props.date.toLocaleTimeString()}.</h2></div>)
}

function tick() {
    const element = (
        <Clock date={new Date()}/>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

export default App;