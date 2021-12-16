import React from 'react';
import MineField from '@components/molecules/MineField';
import { useGameContext } from '@contexts/GameContext';

const GamePage = () => {
  const { gameField, revealedMap, setReveal, gameStatus } = useGameContext();
  return (
    <>
      <MineField
        gameField={gameField}
        revealedMap={revealedMap}
        onReveal={setReveal}
      />
      <h4>{gameStatus}</h4>
    </>
  );
};

export default GamePage;
