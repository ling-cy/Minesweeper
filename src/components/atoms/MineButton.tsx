import React from 'react';
import { Mine, Flag } from '@assets/images';

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
    if (flagged) {
      return <img src={Flag} style={{ width: '24px', height: '24px' }} />;
    }
    if (revealed) {
      switch (num) {
        case -1:
          return <img src={Mine} style={{ width: '26px', height: '26px' }} />;
        case 0:
          return;
        default:
          return <span>{`${num}`}</span>;
      }
    }
    return;
  }, [num, revealed, flagged]);

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
        width: '36px',
        height: '36px',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: revealed ? 'outset' : 'solid',
        borderTopWidth: revealed ? '2px' : '4px',
        borderLeftWidth: revealed ? '2px' : '4px',
        borderBottomWidth: revealed ? '0px' : '4px',
        borderRightWidth: revealed ? '0px' : '4px',
        borderTopColor: revealed ? 'rgb(125,125,125)' : 'white',
        borderLeftColor: revealed ? 'rgb(125,125,125)' : 'white',
        borderBottomColor: 'rgb(125,125,125)',
        borderRightColor: 'rgb(125,125,125)',
        color: 'black',
        backgroundColor: last ? 'rgb(234,51,35)' : 'rgb(198,198,198)',
        fontSize: '24px',
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
