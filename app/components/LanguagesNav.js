import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function LanguagesNav({ selected, setLanguage }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    
    const handleLanguageClick = (lang) => setLanguage(lang);

    return (
        <Fragment>
            <ul className='flex-center'>
                {languages.map(language => (
                    <li key={language}>
                        <button 
                            className={`btn-clear nav-link ${selected === language ? 'active' : ''}`}
                            // style={selectedLanguage === language ? {color: 'rgb(187, 46, 31)'} : null}
                            // style={{color: selectedLanguage === language ? 'rgb(187, 46, 31)' : ''}}
                            onClick={() => handleLanguageClick(language)}
                        >
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

// Component PropTypes.
LanguagesNav.propTypes = {
    selected: PropTypes.oneOf(['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']).isRequired,
    setLanguage: PropTypes.func.isRequired
}

export default LanguagesNav;