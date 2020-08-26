import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Popular from './components/Popular';
import Battle from './components/Battle';
import Results from './components/Results';
import ThemeContext from './contexts/theme';
import Nav from './components/Nav';
// Styles
import './index.css';

// Component peices.
// 1. State
// 2. Lifecycle
// 3. UI - render method

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(prevState => ({
                    theme: prevState.theme === 'light' ? 'dark' : 'light'
                }));
            }
        }
    }

    render() {
        return (
            <Router>
                <ThemeContext.Provider value={this.state}>
                    <div className={this.state.theme}>
                        <div className='container'>
                            <Nav />
                            <Switch>
                                <Route exact path='/' component={Popular} />
                                <Route exact path='/battle'component={Battle} />
                                <Route path='/battle/results'component={Results} />
                                <Route render={() => <h1>404 - Sorry page not found</h1>} />
                            </Switch>
                        </div>
                    </div>
                </ThemeContext.Provider>
            </Router>
        );
    }
};

// ReactDOM.render takes 2 args:

// 1. React Component./element
// 2. where to render the element/component to

ReactDOM.render(<App />, document.getElementById('app'));
