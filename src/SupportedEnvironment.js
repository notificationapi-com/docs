import React from 'react';
import { useState } from 'react';

const SupportedEnvironment = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={props.path}
      style={{
        textDecoration: 'none',
        filter: isHovered ? 'none' : 'grayscale(100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <i
        class={props.logo + (isHovered ? ' colored' : '')}
        style={{ fontSize: '3em' }}
      ></i>
      <div style={{ textAlign: 'center' }}>{props.name}</div>
    </a>
  );
};

export default SupportedEnvironment;
