import React from 'react';
import ThemeContext from '../contexts/theme';

const Nav = () => (
    <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
            <nav className='row space-between'>
                <button
                    className='btn-clear'
                    style={{fontSize: 30}}
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? '🔦' : '💡'}
                </button>
            </nav>
        )}
    
    </ThemeContext.Consumer>

);

export default Nav;