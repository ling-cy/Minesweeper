import React from 'react';

const FieldSuare = ({
  revealed,
  onReveal,
  onFlag,
  disabled,
  last,
  children,
}: {
  revealed: boolean;
  onReveal: () => void;
  onFlag: () => void;
  disabled: boolean;
  last: boolean;
  children?: React.ReactNode;
}) => {
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
        width: '34px',
        height: '34px',
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
        backgroundColor: last ? 'rgb(234,51,35)' : 'rgb(198,198,198)',
      }}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default FieldSuare;
