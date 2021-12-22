import React from 'react';
import MineField from '@components/organisms/MineField';
import { useGameContext } from '@contexts/GameContext';
import Timer from '@components/molecules/Timer';
import CounterNumber from '@components/atoms/CounterNumber';
import Face from '@components/atoms/Face';

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
      <Face gameStatus={gameStatus} />
      <Timer gameStatus={gameStatus} />
      <h4>Mine left:</h4>
      <CounterNumber value={mineLeft} usage="mineCounter" />
    </>
  );
};

export default GamePage;
