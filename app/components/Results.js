import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa';
import queryString from 'query-string';
import { battle } from '../utils/api';
import Card from './Card';
import ProfileList from './ProfileList';

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
        const { playerOne,playerTwo } = queryString.parse(this.props.location.search);

        battle([playerOne, playerTwo])
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
        const { winner, loser, error, loading } = this.state;

        if(loading) {
            <p>LOADING</p>
        } else if(error) {
            <p className='center-text error'>{error}</p>
        }
        
        return (
            <React.Fragment>
                <div className='grid space-around container-sm'>
                    {/*Winner Card */}
                    <Card
                        header={winner.score === loser.score ? 'Tie' : 'Winner'}
                        avatar={winner.profile.avatar_url}
                        name={winner.profile.login}
                        subHeader={`Score: ${winner.score.toLocaleString()}`}
                        href={winner.profile.html_url}
                    >
                        <ProfileList profile={winner.profile} />
                    </Card>
                    {/* Loser Card */}
                    <Card
                        header={winner.score === loser.score ? 'Tie' : 'Loser'}
                        avatar={loser.profile.avatar_url}
                        name={loser.profile.login}
                        subHeader={`Score: ${loser.score.toLocaleString()}`}
                        href={loser.profile.html_url}
                    >
                        <ProfileList profile={loser.profile} />
                    </Card>
                    {/*Results
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>*/}
                </div>
                <Link 
                    className='btn dark-btn btn-space'
                    to='/battle'
                >
                    Reset
                </Link>
            </React.Fragment>
        );
    }
};

export default Results;