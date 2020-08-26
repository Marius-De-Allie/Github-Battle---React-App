import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/theme';

class PlayerInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        const { value } = evt.target;
        this.setState(prevState => ({
            username: value
        }));
    }

    handleSubmit(evt) {
        const { username } = this.state;
        evt.preventDefault();
        this.props.onSubmit(username);
        // Clear input field after form submission.
        this.setState({
            username: ''
        });
    }

    render() {
        const { username } = this.state;

        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <form onSubmit={this.handleSubmit} className='column player'>
                        <label htmlFor='username' className='player-label'>{this.props.label}</label>
                        <div className='row player-inputs'>
                            <input 
                                type='text' 
                                id='username'
                                className={`input-${theme}`}
                                name='username'
                                value={username} 
                                onChange={this.handleChange}
                                placeholder='Github username'
                                autoComplete='off'
                            />
                            <button 
                                type='submit' 
                                className={`btn ${theme === 'light' ? 'dark-btn' : 'light-btn'}` }
                                disabled={!username}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </ThemeContext.Consumer>
        );
    }
};

// Comp proptypes.
PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default PlayerInput;