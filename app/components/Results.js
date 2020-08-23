import React from 'react';
import { battle } from '../utils/api';

class Results extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }

    componentDidMount() {
        battle([this.props.playerOne, this.props.playerTwo])
        .then(players => {
            this.setState(prevState => ({
                winner: players[0],
                loser: players[1],
                error: null,
                loading: false
            }));
        })
        .catch(({ message }) => {
            this.setState(prevState => ({
                error: message,
                loading: false
            }));
        })
    }

    render() {
        const { playerOne, playerTwo } = this.props;
        const { winner, loser, error, loading } = this.state;
        
        return (
            <div>
                Results
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        );
    }
};

export default Results;