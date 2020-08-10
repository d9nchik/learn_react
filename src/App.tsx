import React from 'react';
import './App.css';

function UserGreeting() {
    return <h1>З поверненням!</h1>;
}

function GuestGreeting() {
    return <h1>Зареєструйтеся, будь-ласка.</h1>;
}

type IsLoggedType = {
    isLoggedIn: boolean
}

function Greeting(props: IsLoggedType) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

function LoginButton(props: { onClick: () => void }) {
    return (
        <button onClick={props.onClick}>
            Увійти
        </button>
    );
}

function LogoutButton(props: { onClick: () => void }) {
    return (
        <button onClick={props.onClick}>
            Вийти
        </button>
    );
}

class LoginControl extends React.Component<any, IsLoggedType> {
    constructor(props: any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/> {button}      </div>
        );
    }
}

function App() {
    return <LoginControl/>
}

export default App;