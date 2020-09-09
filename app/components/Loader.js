import React, {useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Loader = ({ text, speed }) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const id= setInterval(() => {
    setContent((content) => {
      return content === `${text}...` 
      ? text
      : `${content}.`
      })
    }, speed);

    return () => clearInterval(id.current);
  }, [text, speed]);

  return (
    <p>{content}</p>
  );
};

Loader.defaultProps = {
    text: 'loading',
    speed: 300
};

Loader.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
};

export default Loader;