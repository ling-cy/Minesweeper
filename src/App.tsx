import React from 'react';
import { GameContextProvider } from '@contexts/GameContext';
import GamePage from '@page/GamePage';
import './styles/App.css';

const App = () => {
  return (
    <GameContextProvider>
      <GamePage />
    </GameContextProvider>
  );
};

export default App;
