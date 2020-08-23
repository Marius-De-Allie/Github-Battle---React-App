import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa';

const ReposGrids = ({ repos }) => console.log(repos)||(
    <ul className='grid space-around'>
        {repos.map((repo, index) => {
            return (
                <li 
                    key={repo.html_url}
                    className='repo bg-light'
                >
                    <h4 className='header-lg center-text'>
                        {`#${index + 1}`}
                    </h4>
                    <img 
                        className='avatar'
                        src={repo.owner.avatar_url}
                        alt={`Avatar for ${repo.owner.login}`}
                    />
                    <h2 className='center-text'>
                        <a className='link' href={repo.html_url} target='_blank'title={`${repo.owner.login} git hub repo`}>{repo.owner.login}</a>
                    </h2>
                    <ul className="card-list">
                        <li>
                            <FaUser color='rgb(255, 191, 116)' size={22} />
                            <a href={`https://github.com/${repo.owner.login}`} target='_blank'>{repo.owner.login}</a>
                        </li>
                        <li>
                            <FaStar color='rgb(255, 215, 0)' size={22} />
                            {repo.stargazers_count.toLocaleString()} stars
                        </li>
                        <li>
                            <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                            {repo.forks.toLocaleString()} forks
                        </li>
                        <li>
                            <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
                            {repo.open_issues.toLocaleString()} open issues
                        </li>
                    </ul>
                </li>
            );
        })}
    </ul>
);

// Component proptypes.
ReposGrids.propTypes = {
    repos: PropTypes.array.isRequired
};

export default ReposGrids;