import React from 'react';
import './App.css';

function handleClick(e: React.SyntheticEvent) {
    e.preventDefault()
    console.log("You clicked on link")
}

function App() {
    return <a href="https://google.com" onClick={handleClick}>Click me</a>

}

export default App;