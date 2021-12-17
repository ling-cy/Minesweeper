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
    if (e.button === 0) {
      onReveal();
    }
  };

  const handleContextMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (e.button !== 0) {
      onFlag();
    }
  };

  return (
    <button
      style={{
        display: 'flex',
        width: '25px',
        height: '25px',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: revealed ? 'outset' : 'solid',
        borderTopWidth: revealed ? '1.5px' : '3px',
        borderLeftWidth: revealed ? '1.5px' : '3px',
        borderBottomWidth: revealed ? '0px' : '3px',
        borderRightWidth: revealed ? '0px' : '3px',
        borderTopColor: revealed ? 'rgb(125,125,125)' : 'white',
        borderLeftColor: revealed ? 'rgb(125,125,125)' : 'white',
        borderBottomColor: 'rgb(125,125,125)',
        borderRightColor: 'rgb(125,125,125)',
        color: 'black',
        backgroundColor: flagged ? 'green' : last ? 'red' : 'rgb(198,198,198)',
        fontSize: '12px',
      }}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default MineButton;
