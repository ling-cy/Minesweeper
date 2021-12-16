import { GameContextProvider } from '@contexts/GameContext';
import React from 'react';
import MineField from '@components/molecules/MineField';

const App = () => (
  <GameContextProvider>
    <h1>Minesweeper</h1>
    <MineField />
  </GameContextProvider>
);

export default App;
