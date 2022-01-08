import React from 'react';
import MineField from '@components/organisms/MineField';
import { useGameContext } from '@contexts/GameContext';
import Timer from '@components/molecules/Timer';
import CounterNumber from '@components/atoms/CounterNumber';
import FaceButton from '@components/atoms/FaceButton';
import GameWindow from '@components/templates/GameWindow';

const GamePage = () => {
  const { gameField, fieldStatus, setReveal, gameStatus, setFlag, mineLeft } =
    useGameContext();
  return (
    <GameWindow
      settingBar={<></>}
      gamePanel={
        <>
          <CounterNumber value={mineLeft} usage="mineCounter" />
          <FaceButton gameStatus={gameStatus} />
          <Timer gameStatus={gameStatus} />
        </>
      }
      gameField={
        <MineField
          gameField={gameField}
          fieldStatus={fieldStatus}
          onReveal={setReveal}
          onFlag={setFlag}
          gameStatus={gameStatus}
        />
      }
    />
  );
};

export default GamePage;
