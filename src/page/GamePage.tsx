import React from 'react';
import MineField from '@components/organisms/MineField';
import { useGameContext } from '@contexts/GameContext';
import Timer from '@components/molecules/Timer';
import CounterNumber from '@components/atoms/CounterNumber';
import FaceButton from '@components/atoms/FaceButton';
import GameWindow from '@components/templates/GameWindow';
import { GameStatus } from '@constants/game';
import DropdownBar from '@components/organisms/DropdownBar';
import { DropdownButton } from '@components/organisms/Dropdown';
import { DIFFICULTY } from '@constants/game';

const DROPDOWN_CLASSNAME = 'dropdown';

const GamePage = () => {
  const {
    gameField,
    fieldStatus,
    setReveal,
    gameStatus,
    setFlag,
    mineLeft,
    restartGame,
    setDifficulty,
  } = useGameContext();

  const [pressedDropdownButton, setPressedDropdownButton] = React.useState<
    string | null
  >(null);

  const gameDropdownButtons: DropdownButton[][] = [
    [
      {
        text: 'New',
        onClick: () => restartGame(),
      },
    ],
    [
      {
        text: 'Beginner',
        onClick: () => setDifficulty(DIFFICULTY.BEGINNER),
      },
      {
        text: 'Intermediate',
        onClick: () => setDifficulty(DIFFICULTY.INTERMEDIATE),
      },
      {
        text: 'Expert',
        onClick: () => setDifficulty(DIFFICULTY.EXPERT),
      },
    ],
  ];
  const helpDropdownButtons: DropdownButton[][] = [
    [
      {
        text: 'About',
        onClick: () =>
          window.open('https://github.com/ling-cy/Minesweeper', '_newtab'),
      },
    ],
  ];

  const buttons = [
    { buttonName: 'Game', dropdownButtons: gameDropdownButtons },
    { buttonName: 'Help', dropdownButtons: helpDropdownButtons },
  ];

  const handleFaceButtonOnClick = () => {
    if (gameStatus === GameStatus.Lost || gameStatus === GameStatus.Won) {
      restartGame();
    }
  };

  const handleDropdownBarBtnOnClick = (buttonName: string | null) => {
    if (
      !pressedDropdownButton ||
      (pressedDropdownButton && pressedDropdownButton !== buttonName)
    ) {
      setPressedDropdownButton(buttonName);
    } else {
      setPressedDropdownButton(null);
    }
  };

  window.onmousedown = (e: MouseEvent) => {
    const className = (e.target as Element).className;
    if (!className.includes(DROPDOWN_CLASSNAME) && !!pressedDropdownButton) {
      e.preventDefault();
      e.stopImmediatePropagation();
      setPressedDropdownButton(null);
    }
  };

  return (
    <GameWindow
      settingBar={
        <DropdownBar
          className={DROPDOWN_CLASSNAME}
          pressedButton={pressedDropdownButton}
          onClick={buttonName => handleDropdownBarBtnOnClick(buttonName)}
          closeDrowdownFn={() => setPressedDropdownButton(null)}
          buttons={buttons}
        />
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
