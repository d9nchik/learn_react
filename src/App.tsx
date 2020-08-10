import React from 'react';
import './App.css';

function WarningBanner(props: {warn: boolean}) {
    if (!props.warn) {    return null;  }
    return (
        <div className="warning">
            Попередження!
        </div>
    );
}

class Page extends React.Component<any, {showWarning: boolean}> {
    constructor(props: any) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />        <button onClick={this.handleToggleClick}>
                {this.state.showWarning ? 'Сховати' : 'Показати'}
            </button>
            </div>
        );
    }
}

function App() {
    return <Page/>
}

export default App;