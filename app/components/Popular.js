import React, { Component } from 'react';
import LanguagesNav from './LanguagesNav';
import { fetchPopularRepos } from '../utils/api';

class Popular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All',
            repos: {},
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
            error: null
        }));

        if(!this.state.repos[selectedLanguage]) {
            fetchPopularRepos(selectedLanguage)
            .then(data => {
                this.setState(({ repos })=> ({
                    repos: {
                        ...repos,
                        [selectedLanguage]: data
                    },
                    error: null
                }))
            })
            .catch((e) => {
                console.warn('Error fetching repos', e);
                this.setState({
                    error: 'There was an error fetching the repositories.'
                })
            });
        }
    };

    render() {
        const { selectedLanguage, repos, error } = this.state;

        return (
            <React.Fragment>
                <LanguagesNav selected={selectedLanguage} onUpdateLanguage={this.updateLanguage} />
                {!repos[selectedLanguage] && error === null && <p>LOADING</p>}
                {error && <p>{error}</p>}
                {repos[selectedLanguage] && <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>}
            </React.Fragment>
        );
    }
}

export default Popular;