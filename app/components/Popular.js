import React, { Component } from 'react';
import LanguagesNav from './LanguagesNav';

class Popular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(selectedLanguage) {
        this.setState(prevState => ({
            selectedLanguage
        }))
    };

    render() {
        const { selectedLanguage } = this.state;

        return (
            <LanguagesNav selected={selectedLanguage} onUpdateLanguage={this.updateLanguage} />
        );
    }
}

export default Popular;