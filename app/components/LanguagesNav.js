import React, { Fragment } from 'react';

function LanguagesNav({ selected, onUpdateLanguage }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <Fragment>
            <ul className='flex-center'>
                {languages.map(language => (
                    <li key={language}>
                        <button 
                            className={`btn-clear nav-link ${selected === language ? 'active' : ''}`}
                            // style={selectedLanguage === language ? {color: 'rgb(187, 46, 31)'} : null}
                            // style={{color: selectedLanguage === language ? 'rgb(187, 46, 31)' : ''}}
                            onClick={() => onUpdateLanguage(language)}
                        >
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default LanguagesNav;