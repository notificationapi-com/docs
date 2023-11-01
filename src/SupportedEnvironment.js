import React from 'react';
import { useState } from 'react';

const SupportedEnvironment = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={props.path}
      style={{
        textDecoration: 'none',
        filter: isHovered
          ? 'grayscale(0%) brightness(100%)'
          : 'grayscale(100%) brightness(0%)',
        transition: 'all 0.5s ease',
        opacity: isHovered ? '1' : '0.5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <i class={props.logo + ' colored'} style={{ fontSize: '3em' }}></i>
      <div style={{ textAlign: 'center' }}>{props.name}</div>
    </a>
  );
};

export default SupportedEnvironment;
