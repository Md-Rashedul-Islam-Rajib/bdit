import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="100"
        height="100"
        className="animate-spi"
      >
        <g transform="matrix(1,0,0,1,20,20)">
          <rect fill="#e15b64" height="30" width="30" y="-15" x="-15" transform="matrix(0.29183778166770935,0,0,0.29183778166770935,0,0)" />
        </g>
        <g transform="matrix(1,0,0,1,50,20)">
          <rect fill="#f47e60" height="30" width="30" y="-15" x="-15" transform="matrix(0.29183322191238403,0,0,0.29183322191238403,0,0)" />
        </g>
        <g transform="matrix(1,0,0,1,80,20)">
          <rect fill="#f8b26a" height="30" width="30" y="-15" x="-15" transform="matrix(0.5401629209518433,0,0,0.5401629209518433,0,0)" />
        </g>
        <g transform="matrix(1,0,0,1,20,50)">
          <rect fill="#f47e60" height="30" width="30" y="-15" x="-15" transform="matrix(0.29183322191238403,0,0,0.29183322191238403,0,0)" />
        </g>
        <g transform="matrix(1,0,0,1,50,50)">
          <rect fill="#f8b26a" height="30" width="30" y="-15" x="-15" transform="matrix(0.5401629209518433,0,0,0.5401629209518433,0,0)" />
        </g>
        <g transform="matrix(1,0,0,1,80,50)">
          <rect fill="#abbd81" height="30" width="30" y="-15" x="-15" transform="matrix(0.8190279006958008,0,0,0.8190279006958008,0,0)" />
        </g>
        <g transform="matrix(1,0,0,1,20,80)">
          <rect fill="#f8b26a" height="30" width="30" y="-15" x="-15" transform="matrix(0.5401629209518433,0,0,0.5401629209518433,0,0)" />
        </g>
        <g transform="matrix(1,0,0,1,50,80)">
          <rect fill="#abbd81" height="30" width="30" y="-15" x="-15" transform="matrix(0.8190279006958008,0,0,0.8190279006958008,0,0)" />
        </g>
        <g transform="matrix(1,0,0,1,80,80)">
          <rect fill="#849b87" height="30" width="30" y="-15" x="-15" transform="matrix(1,0,0,1,0,0)" />
        </g>
      </svg>
    </div>
  );
};

export default Loader;