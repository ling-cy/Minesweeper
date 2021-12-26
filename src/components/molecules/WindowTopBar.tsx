import { MinesweeperLogo } from '@assets/images';
import React from 'react';

const WindowTopBar = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(5,12,165)',
        height: '36px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginLeft: '4px',
        }}
      >
        <img src={MinesweeperLogo} style={{ width: '30px', height: '32px' }} />
        <div className="topBarFont">Minesweeper</div>
      </div>
      <div></div>
    </div>
  );
};

export default WindowTopBar;
