import React, { Component } from 'react';
import LanguagesNav from './LanguagesNav';
import { fetchPopularRepos } from '../utils/api';
import ReposGrid from './ReposGrid';
// import Loader from './Loader';

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
                {!repos[selectedLanguage] && error === null && <p>Loading</p>}
                {error && <p className='center-text error'>{error}</p>}
                {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
            </React.Fragment>
        );
    }
};

export default Popular;