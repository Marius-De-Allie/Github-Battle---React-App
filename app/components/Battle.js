import React, { Component, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Instructions from './BattleInstructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import Results from './Results';
import { render } from 'react-dom';

const Battle = () => {
    const [ playerOne, setPlayerOne ] = useState(null);
    const [ playerTwo, setPlayerTwo ] = useState(null);

    const handleSubmit = (id, player) => id === 'playerOne' 
        ? setPlayerOne(player) 
        : setPlayerTwo(player);

    const handleReset = (id) => id === 'playerOne' 
        ? setPlayerOne(null) 
        : setPlayerTwo(null);

        return (
            <Fragment>
                <Instructions />
                <div className='players-container'>
                    <h1 className='center-text header-lg'>Players</h1>
                    <div className='row space-around'>
                        {!playerOne ? 
                            <PlayerInput 
                                onSubmit={(player) => handleSubmit('playerOne', player)} 
                                label='Player One'
                            /> : 
                            <PlayerPreview 
                                label='Player One' 
                                onReset={() => handleReset('playerOne')} 
                                username={playerOne}
                            /> 
                        }
                        {!playerTwo ? 
                            <PlayerInput 
                                onSubmit={(player) => handleSubmit('playerTwo', player)} 
                                label='Player Two'
                            /> : 
                            <PlayerPreview 
                                label='Player Two' 
                                onReset={() => handleReset('playerTwo')} 
                                username={playerTwo}
                            /> 
                        }
                    </div>
                    {playerOne && playerTwo && 
                        <Link
                        to={{
                            pathname: '/battle/results',
                            search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                        }}
                        >
                            Battle
                        </Link>
                    }
                </div>
            </Fragment>
        );
    };
/* */

// class Battle extends Component {

//     state = {
//         playerOne: null,
//         playerTwo: null,
//         battle: false
//     }

//     handleSubmit = (id, player) => {
//         this.setState({
//             [id]: player
//         })
//     }

//     handleReset = (id) => {
//         // Reset playerOne or PlayerTwo state to null
//         this.setState({
//             [id]: null
//         });
//     }

//     render() {
//         const { playerOne, playerTwo } = this.state; 

      
//         return (
//             <Fragment>
//                 <Instructions />
//                 <div className='players-container'>
//                     <h1 className='center-text header-lg'>Players</h1>
//                     <div className='row space-around'>
//                         {!playerOne ? 
//                             <PlayerInput 
//                                 onSubmit={player => this.handleSubmit('playerOne',player)} 
//                                 label='Player One'
//                             /> : 
//                             <PlayerPreview 
//                                 label='Player One' 
//                                 onReset={() => this.handleReset('playerOne')} 
//                                 username={playerOne}
//                             /> 
//                         }
//                         {!playerTwo ? 
//                             <PlayerInput 
//                                 onSubmit={player => this.handleSubmit('playerTwo', player)} 
//                                 label='Player Two'
//                             /> : 
//                             <PlayerPreview 
//                                 label='Player Two' 
//                                 onReset={() => this.handleReset('playerTwo')} 
//                                 username={playerTwo}
//                             /> 
//                         }
//                     </div>
//                     {playerOne && playerTwo && 
//                         <Link
//                          to={{
//                              pathname: '/battle/results',
//                              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
//                          }}
//                         >
//                             Battle
//                         </Link>
//                     }
//                 </div>
//             </Fragment>
//         );
//     }
// };

export default Battle;