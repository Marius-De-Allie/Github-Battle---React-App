import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../contexts/theme';

const Nav = () => (
    <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
            <nav className='row space-between'>
                <ul className='row nav'>
                    <li>
                        <NavLink exact to='/' className='nav-link' activeClassName='active-nav'>Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to='/battle' className='nav-link' activeClassName='active-nav'>Battle</NavLink>
                    </li>
                </ul>
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