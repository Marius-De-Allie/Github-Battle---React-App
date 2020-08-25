import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withHover from './withHover';

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

const ToolTip = ({ text, children, hovering }) => (
    <TooltipContainer>
        {hovering && <Tooltip>{text}</Tooltip>}
        {children}
    </TooltipContainer>
);

// Tooltip proptypes.
Tooltip.propType = {
    text: PropTypes.string.isRequired,
    hovering: PropTypes.bool
};

export default withHover(ToolTip);