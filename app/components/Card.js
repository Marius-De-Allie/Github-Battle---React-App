import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ header, avatar, name, subHeader, href, children }) => (
    <div className='card bg-light'>
        <h4 className='header-lg center-text'>
            {header}
        </h4>
        <img 
            className='avatar' 
            src={avatar} 
            alt={`Avatar for ${name}`} 
        />
        <h4 className='center-text'>
            {subHeader}
        </h4>
        <h2 className='center-text'>
            <a className='link' href={href}>
                {name}
            </a>
        </h2>
        {children}
    </div>
);

// Card proptypes.
Card.propTypes = {
    header: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subHeader: PropTypes.string,
    href: PropTypes.string.isRequired,
};

export default Card;