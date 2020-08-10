import React from 'react';
import './App.css';

function UserGreeting() {
    return <h1>З поверненням!</h1>;
}

function GuestGreeting() {
    return <h1>Зареєструйтеся, будь-ласка.</h1>;
}

type greet = {
    isLoggedIn: boolean
}

function Greeting(props: greet) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

function App() {
    return <Greeting isLoggedIn={true}/>
}

export default App;