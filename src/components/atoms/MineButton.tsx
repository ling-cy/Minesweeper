import React from 'react';

const MineButton = ({ num }: { num: number }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '40px',
        height: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
      }}
    >
      <span>{num === -1 ? '*' : `${num}`}</span>
    </div>
  );
};

export default MineButton;
