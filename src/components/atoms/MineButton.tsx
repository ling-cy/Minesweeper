import React from 'react';

const MineButton = ({
  num,
  revealed,
  onReveal,
}: {
  num: number;
  revealed: boolean;
  onReveal: () => void;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '40px',
        height: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        color: revealed ? 'black' : '#EEE',
      }}
      onClick={onReveal}
    >
      {<span>{num === -1 ? '*' : `${num}`}</span>}
    </div>
  );
};

export default MineButton;
