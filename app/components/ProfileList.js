import React from 'react';
import PropTypes from 'prop-types';

const ProfileList = ({ profile }) => (
    <ul className='card-list'>
        <li>
            <FaUser color='rgb(239, 115, 115)' size={22} />
            {profile.name}
        </li>
        {profile.location && (
            <li>
                <FaCompass color='rgb(144, 115, 255)' size={22} />
                {profile.location}
            </li>
        )}
        {profile.company && (
            <li>
                <FaBriefcase color='#795548' size={22} />
                {profile.company}
            </li>
        )}
        <li>
            <FaUsers color='rgb(129, 195, 245)' size={22} />
            {profile.followers.toLocaleString()}
        </li>
        <li>
            <FaUserFriends color='rgb(64, 183, 95)' size={22} />
            {profile.following.toLocaleString()}
        </li>
    </ul>
);

// ProfileList proptypes.
ProfileList.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileList;