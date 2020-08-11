import React from 'react';
import './App.css';

class NameForm extends React.Component<any, {value: string}> {
    constructor(props: any) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.FormEvent<HTMLInputElement>) {    this.setState({value: event.currentTarget.value});  }
    handleSubmit(event: React.SyntheticEvent) {
        alert('Ім\'я, що було надіслано: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ім'я:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                <input type="submit" value="Надіслати" />
            </form>
        );
    }
}

function App() {
    return <NameForm/>
}

export default App;