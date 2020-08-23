import React from 'react';

class Results extends React.Component {

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