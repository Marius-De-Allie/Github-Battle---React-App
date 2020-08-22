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

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
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
        const { selectedLanguage, repos, error } = this.state;

        return (
            <React.Fragment>
                <LanguagesNav selected={selectedLanguage} onUpdateLanguage={this.updateLanguage} />
                {repos === null && error === null && <p>LOADING</p>}
                {error && <p>{error}</p>}
                {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
            </React.Fragment>
        );
    }
}

export default Popular;