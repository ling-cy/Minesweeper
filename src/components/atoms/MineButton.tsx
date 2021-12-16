import React from 'react';

const MineButton = ({
  num,
  revealed,
  flagged,
  onReveal,
  onFlag,
  disabled,
  last,
}: {
  num: number;
  revealed: boolean;
  flagged: boolean;
  onReveal: () => void;
  onFlag: () => void;
  disabled: boolean;
  last: boolean;
}) => {
  const content = React.useMemo(() => {
    if (!revealed) {
      if (flagged) {
        return <span>%</span>;
      }
      return;
    } else {
      switch (num) {
        case -1:
          return <span>*</span>;
        case 0:
          return;
        default:
          return <span>{`${num}`}</span>;
      }
    }
  }, [num, revealed]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const isRightClick = e.button !== 0;
    const isLeftClick = e.button === 0;
    if (isRightClick) {
      onFlag();
      console.log('right');
    }
    if (isLeftClick) {
      onReveal();
      console.log('left');
    }
  };

  return (
    <button
      style={{
        display: 'flex',
        width: '40px',
        height: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        color: 'black',
        backgroundColor: revealed
          ? flagged
            ? 'green'
            : last
            ? 'red'
            : 'grey'
          : 'white',
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default MineButton;
