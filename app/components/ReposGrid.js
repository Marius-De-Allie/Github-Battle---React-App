import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa';
import Card from './Card';
import Tooltip from './Tooltip';

const ReposGrids = ({ repos }) => console.log(repos)||(
    <ul className='grid space-around'>
        {repos.map((repo, index) => {
            return (
                <li 
                    key={repo.html_url}
                    className='repo bg-light'
                >

                    <Card
                        header={`#${index + 1}`}
                        avatar={repo.owner.avatar_url}
                        name={repo.owner.login}
                        href={repo.html_url}
                        
                    >
                        <ul className="card-list">
                            <li>
                                <Tooltip text='Github username'>
                                    <FaUser color='rgb(255, 191, 116)' size={22} />
                                    <a href={`https://github.com/${repo.owner.login}`} target='_blank'>{repo.owner.login}</a>
                                </Tooltip>
                            </li>
                            <li>
                                <FaStar color='rgb(255, 215, 0)' size={22} />
                                {`${repo.stargazers_count.toLocaleString()} stars`} 
                            </li>
                            <li>
                                <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                                {`${repo.forks.toLocaleString()} forks`}
                            </li>
                            <li>
                                <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
                                {`${repo.open_issues.toLocaleString()} open issues`} 
                            </li>
                        </ul>
                    </Card>
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