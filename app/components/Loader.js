// import React from 'react';
// import PropTypes from 'prop-types';

// class Loader extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             content: props.text
//         }
//     }

//     componentDidMount() {
//         const { text, speed } = this.prop;
//         this.interval = window.setInterval(() => {
//             this.state.content === text + '...' ?
//             this.setState({
//                 content: text
//             }) :
//             this.setState(prevState => ({
//                 content: prevState.content + '.'
//             }))
//         }, speed)
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }

//     render() {
//         return (
//             <p>{this.state.content}</p>
//         );
//     }
// };

// Loader.defaultProps = {
//     text: 'loading',
//     speed: 300
// };

// Loader.propTypes = {
//     text: PropTypes.string.isRequired,
//     speed: PropTypes.number.isRequired
// };

// export default Loader;