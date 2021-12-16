import React from 'react';
import { GameContextProvider } from '@contexts/GameContext';
import GamePage from '@page/GamePage';

const App = () => {
  return (
    <GameContextProvider>
      <h1>Minesweeper</h1>
      <GamePage />
    </GameContextProvider>
  );
};

export default App;
