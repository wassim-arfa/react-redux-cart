import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import store from './store/store';
import {Provider} from 'react-redux';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
                <Provider store={store}>
                <Navbar />
                </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));