import React from 'react';
import MineField from '@components/organisms/MineField';
import { useGameContext } from '@contexts/GameContext';
import Timer from '@components/molecules/Timer';
import CounterNumber from '@components/atoms/CounterNumber';
import FaceButton from '@components/atoms/FaceButton';
import Typography from '@components/atoms/Typography';
import GameWindow from '@components/templates/GameWindow';
import { GameStatus } from '@constants/game';
import TextButton from '@components/molecules/TextButton';

const GamePage = () => {
  const {
    gameField,
    fieldStatus,
    setReveal,
    gameStatus,
    setFlag,
    mineLeft,
    restartGame,
  } = useGameContext();

  const handleFaceButtonOnClick = () => {
    if (gameStatus === GameStatus.Lost || gameStatus === GameStatus.Won) {
      restartGame();
    }
  };
  return (
    <GameWindow
      settingBar={
        <>
          <TextButton text="Game" pressdownable />
          <TextButton text="Help" pressdownable />
        </>
      }
      gamePanel={
        <>
          <CounterNumber value={mineLeft} usage="mineCounter" />
          <FaceButton
            gameStatus={gameStatus}
            onClick={handleFaceButtonOnClick}
          />
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
