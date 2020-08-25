import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TooltipContainer = styled.div`
    position: relative;
    display: flex;
`;

const Tooltip = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 160px;
    bottom: 100%;
    left: 50%;
    margin-left: -80px;
    borderRadius: 30px;
    background-color: hsla(0, 0%, 20%, 0.9);
    padding: 7px;
    margin-bottom: 5px;
    color: #fff;
    text-align: center;
    font-size: 14px
`;

class ToolTip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hovering: false
        }

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }

    mouseOver() {
        this.setState(prevState => ({
            hovering: true
        }))
    }
    mouseOut() {
        this.setState(prevState => ({
            hovering: false
        }))
    }

    render() {
        const { text, children }  = this.props;
        const { hovering } = this.state;

        return (
            <TooltipContainer
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
            >
                {hovering && <Tooltip>{text}</Tooltip>}
                {children}
            </TooltipContainer>
        );
    }
};

// Tooltip proptypes.
Tooltip.propType = {
    text: PropTypes.string.isRequired
};

export default ToolTip;