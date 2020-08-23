import React, { Component, Fragment } from 'react';
import Instructions from './BattleInstructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

class Battle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerOne: null,
            playerTwo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id, player) {
        this.setState({
            [id]: player
        })

    }

    handleReset(id) {
        // Reset playerOne or PlayerTwo state to null
        this.setState({
            [id]: null
        });
    }

    render() {
        const { playerOne, playerTwo } = this.state; 

        return (
            <Fragment>
                <Instructions />
                <div className='players-container'>
                    <h1 className='center-text header-lg'>Players</h1>
                    <div className='row space-around'>
                        {!playerOne ? 
                            <PlayerInput 
                                onSubmit={player => this.handleSubmit('playerOne',player)} 
                                label='Player One'
                            /> : 
                            <PlayerPreview 
                                label='Player One' 
                                onReset={() => this.handleReset('playerOne')} 
                                username={playerOne}
                            /> 
                        }
                        {!playerTwo ? 
                            <PlayerInput 
                                onSubmit={player => this.handleSubmit('playerTwo', player)} 
                                label='Player Two'
                            /> : 
                            <PlayerPreview 
                                label='Player Two' 
                                onReset={() => this.handleReset('playerTwo')} 
                                username={playerTwo}
                            /> 
                        }
                    </div>
                    {playerOne && playerTwo && <button type='button'>Battle</button>}
                </div>
            </Fragment>
        );
    }
};

export default Battle;