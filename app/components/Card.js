import React from 'react';

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

export default Card;