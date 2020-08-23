import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';

// Component peices.
// 1. State
// 2. Lifecycle
// 3. UI - render method

class App extends React.Component {

    render() {
        return (
            <div className='container'>
                {/*<Popular />*/}
                <Battle />
            </div>
        );
    }
};

// ReactDOM.render takes 2 args:

// 1. React Component./element
// 2. where to render the element/component to

ReactDOM.render(<App />, document.getElementById('app'));
