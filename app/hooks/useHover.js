import React, { useState } from 'react';

const useHover = () => {
  const [hovering, setHovering] = useState(false);

  const onMouseOver = () => setHovering(true);
  const onMouseOut = () => setHovering(false);

  return [hovering, {
    onMouseOver,
    onMouseOver
  }]
};

export default useHover;