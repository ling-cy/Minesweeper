import WindowTopBar from '@components/molecules/WindowTopBar';
import React from 'react';

const GameWindow = ({
  settingBar,
  gamePanel,
  gameField,
}: {
  settingBar: React.ReactNode;
  gamePanel: React.ReactNode;
  gameField: React.ReactNode;
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(198, 198, 198)',
        display: 'inline-flex',
        flexDirection: 'column',
        minWidth: '350px',
        minHeight: '500px',
        borderStyle: 'outset',
        borderWidth: '2px',
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderBottomColor: 'black',
        borderRightColor: 'black',
        padding: '3px',
      }}
    >
      <WindowTopBar />
      <div>{settingBar}</div>
      <div
        style={{
          backgroundColor: 'rgb(198, 198, 198)',
          display: 'inline-flex',
          flexDirection: 'column',
          borderStyle: 'solid',
          borderWidth: '6px',
          borderTopColor: 'white',
          borderLeftColor: 'white',
          borderBottomColor: 'rgb(125,125,125)',
          borderRightColor: 'rgb(125,125,125)',
          padding: '14px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderStyle: 'solid',
            borderWidth: '4px',
            borderTopColor: 'rgb(125,125,125)',
            borderLeftColor: 'rgb(125,125,125)',
            borderBottomColor: 'white',
            borderRightColor: 'white',
            padding: '8px 8px',
          }}
        >
          {gamePanel}
        </div>
        <div
          style={{
            borderStyle: 'solid',
            borderWidth: '6px',
            borderTopColor: 'rgb(125,125,125)',
            borderLeftColor: 'rgb(125,125,125)',
            borderBottomColor: 'white',
            borderRightColor: 'white',
            marginTop: '14px',
          }}
        >
          {gameField}
        </div>
      </div>
    </div>
  );
};

export default GameWindow;
