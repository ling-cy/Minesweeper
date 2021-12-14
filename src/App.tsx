import { GameProvider } from 'contexts/GameContext';
import React from 'react';
import MineField from './components/molecules/MineField';

const App = () => {
  return (
    <GameProvider>
      <div>
        <h1>Minesweeper</h1>
        <MineField />
      </div>
    </GameProvider>
  );
};

export default App;
