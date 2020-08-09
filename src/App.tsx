import React from 'react';
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

export default App;