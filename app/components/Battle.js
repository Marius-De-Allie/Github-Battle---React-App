import React, { Component, Fragment } from 'react';
import Instructions from './BattleInstructions';
import PlayerInput from './PlayerInput';

class Battle extends Component {

    render() {
        return (
            <Fragment>
                <Instructions />
                <PlayerInput 
                    onSubmit={val => console.log(val)}
                    label='Github username'
                />
            </Fragment>
        );
    }
};

export default Battle;