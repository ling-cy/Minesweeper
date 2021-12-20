import React from 'react';
import MineField from '@components/molecules/MineField';
import { useGameContext } from '@contexts/GameContext';
import Timer from '@components/molecules/Timer';

const GamePage = () => {
  const { gameField, fieldStatus, setReveal, gameStatus, setFlag, mineLeft } =
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
      <Timer gameStatus={gameStatus} />
      <h4>Mine left: {mineLeft}</h4>
    </>
  );
};

export default GamePage;
