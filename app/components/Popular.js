import React, { Component, useReducer, useEffect, useState, useRef } from 'react';
import LanguagesNav from './LanguagesNav';
import { fetchPopularRepos } from '../utils/api';
import ReposGrid from './ReposGrid';
import Loader from './Loader';

const PopularReducer = (state, action) => {
    if(action.type === 'success') {
        return {
            ...state,
             [action.selectedLanguage]: action.repos,
             error: null 
        }
    } else if(action.type === 'fail') {
        return {
            ...state,
            error: action.error.message
        }
    } else {
        throw new Error('That action type is not supported')
    }
};

const initialState = {
    error: null
};

const Popular = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [state, dispatch] = useReducer(PopularReducer, initialState);
    
    const fetchLanguages = useRef([]);

    useEffect(() => {
        if(fetchLanguages.current.includes(selectedLanguage) === false) {
            fetchLanguages.current.push(selectedLanguage);

            fetchPopularRepos(selectedLanguage)
                .then(repos => dispatch({ type: 'success', selectedLanguage, repos }))
                .catch(error => dispatch( {type: 'fail', error } ))
        }
    }, [fetchLanguages, selectedLanguage]);

    return (
        <React.Fragment>
            <LanguagesNav selected={selectedLanguage} setLanguage={setSelectedLanguage} />
            {!state[selectedLanguage] && state.error === null && <Loader text='Fetching repos' />}
            {state.error && <p className='center-text error'>{state.error}</p>}
            {state[selectedLanguage] && <ReposGrid repos={state[selectedLanguage]} />}
        </React.Fragment>
    );

};

export default Popular;