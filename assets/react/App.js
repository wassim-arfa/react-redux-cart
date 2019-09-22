import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));