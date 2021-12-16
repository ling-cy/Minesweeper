import React from 'react';
import MineField from '@components/molecules/MineField';
import { useGameContext } from '@contexts/GameContext';

const GamePage = () => {
  const { gameField, fieldStatus, setReveal, gameStatus, setFlag } =
    useGameContext();
  return (
    <>
      <MineField
        gameField={gameField}
        fieldStatus={fieldStatus}
        onReveal={setReveal}
        onFlag={setFlag}
        gameStatus={gameStatus}
      />
      <h4>{gameStatus}</h4>
    </>
  );
};

export default GamePage;
