import React, { Component } from 'react';
import LanguagesNav from './LanguagesNav';
import { fetchPopularRepos } from '../utils/api';

class Popular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All',
            repos: null,
            error: null
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(selectedLanguage) {
        this.setState(prevState => ({
            selectedLanguage,
            repos: null,
            error: null
        }));

        fetchPopularRepos(selectedLanguage)
        .then(repos => {
            this.setState(prevState => ({
                repos,
                error: null
            }))
        })
        .catch((e) => {
            console.warn('Error fetching repos', e);
            this.setState({
                error: 'There wasan error fetching the repositories.'
            })
        });
    };

    render() {
        const { selectedLanguage } = this.state;

        return (
            <LanguagesNav selected={selectedLanguage} onUpdateLanguage={this.updateLanguage} />
        );
    }
}

export default Popular;