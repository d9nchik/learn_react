import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function getNumber(message: string): number {
    let result = prompt(message);
    if (result == null)
        return 0
    return Number(result);//Work even if user enter not number
}

function App() {
    return (
        <h1 id="red">Hа старт</h1>
    );
}

let time = getNumber("Укажите врея для отсчёта?")

function tick() {
    let element = <p>Время вышло</p>
    if (time > 0)
        element = <p>Осталось {time}&nbsp;секунд</p>
    time--
    ReactDOM.render(element, document.getElementById("root"))
}

setInterval(tick, 1_000)
export default App;