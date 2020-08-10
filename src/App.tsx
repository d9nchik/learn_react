import React from 'react';
import './App.css';


class Toggle extends React.Component<any, { isOn: boolean }> {

    constructor(props: Readonly<undefined>) {
        super(props);
        this.state = {isOn: true}

        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(state => ({isOn: !state.isOn}))
    }


    render() {
        return <button onClick={this.handleClick}>{this.state.isOn ? "ON" : "OFF"}</button>
    }
}


function App() {
    return <Toggle/>
}

export default App;