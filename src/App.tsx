import React from 'react';
import './App.css';

const numbers = [1, 2, 3, 4, 5];

function NumberList(props: { numbers: number[] }) {
    const numbers = props.numbers;
    const listItems = numbers.map((number: number) => <li key={number.toString()}>{number}</li>);
    return (
        <ul>{listItems}</ul>);
}

function App() {
    return <NumberList numbers={numbers}/>
}

export default App;