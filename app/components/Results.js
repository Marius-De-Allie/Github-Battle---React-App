import React from 'react';
import { battle } from '../utils/api';

class Results extends React.Component {

    componentDidMount() {
        battle([this.props.playerOne, this.props.playerTwo])
        .then((players) =>console.log(players))
    }

    render() {
        const { playerOne, playerTwo } = this.props;
        
        return (
            <div>
                Results
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        );
    }
};

export default Results;