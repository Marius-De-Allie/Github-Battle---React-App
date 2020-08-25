import React from 'react';
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa';
import { battle } from '../utils/api';
import Card from './Card';

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

        if(loading) {
            <p>LOADING</p>
        } else if(error) {
            <p className='center-text error'>{error}</p>
        }
        
        return (
            <div className='grid space-around container-sm'>
                <Card
                    header={winner.score === loser.score ? 'Tie' : 'Winner'}
                    avatar={winner.profile.avatar_url}
                    name={winner.profile.login}
                    subHeader={`Score: ${winner.score.toLocaleString()}`}
                    href={winner.profile.html_url}
                >
                    <ul className='card-list'>
                        <li>
                            <FaUser color='rgb(239, 115, 115)' size={22} />
                            {winner.profile.name}
                        </li>
                        {winner.profile.location && (
                            <li>
                                <FaCompass color='rgb(144, 115, 255)' size={22} />
                                {winner.profile.location}
                            </li>
                        )}
                        {winner.profile.company && (
                            <li>
                                <FaBriefcase color='#795548' size={22} />
                                {winner.profile.company}
                            </li>
                        )}
                        <li>
                            <FaUsers color='rgb(129, 195, 245)' size={22} />
                            {winner.profile.followers.toLocaleString()}
                        </li>
                        <li>
                            <FaUserFriends color='rgb(64, 183, 95)' size={22} />
                            {winner.profile.following.toLocaleString()}
                        </li>
                    </ul>
                
                </Card>

                <Card
                    header={winner.score === loser.score ? 'Tie' : 'Loser'}
                    avatar={loser.profile.avatar_url}
                    name={loser.profile.login}
                    subHeader={`Score: ${loser.score.toLocaleString()}`}
                    href={loser.profile.html_url}
                >
                    <ul className='card-list'>
                        <li>
                            <FaUser color='rgb(239, 115, 115)' size={22} />
                            {loser.profile.name}
                        </li>
                        {loser.profile.location && (
                            <li>
                                <FaCompass color='rgb(144, 115, 255)' size={22} />
                                {loser.profile.location}
                            </li>
                        )}
                        {loser.profile.company && (
                            <li>
                                <FaBriefcase color='#795548' size={22} />
                                {loser.profile.company}
                            </li>
                        )}
                        <li>
                            <FaUsers color='rgb(129, 195, 245)' size={22} />
                            {loser.profile.followers.toLocaleString()}
                        </li>
                        <li>
                            <FaUserFriends color='rgb(64, 183, 95)' size={22} />
                            {loser.profile.following.toLocaleString()}
                        </li>
                    </ul>
                </Card>
                {/*Results
                <pre>{JSON.stringify(this.state, null, 2)}</pre>*/}
            </div>
        );
    }
};

export default Results;