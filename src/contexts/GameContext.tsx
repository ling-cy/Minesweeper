import React from 'react';
import { splitEvery } from '@util/splitEvery';
import { DIFFICULTY, GameStatus } from '@constants/game';
import { generateField } from '@util/generateField';
import { revealSides } from '@util/revealSides';

export const GameContext = React.createContext({});

export const useGameContext = () => React.useContext(GameContext);

export const GameContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [difficulty, setDifficulty] = React.useState(DIFFICULTY.EASY);
  const { width, height, mine: mineNumber } = difficulty;
  const [gameField, setGameField] = React.useState(
    generateField(width * height, mineNumber, width),
  );
  const [gameState, setGameState] = React.useState(GameStatus.Pending);
  const [revealedMap, setRevealedMap] = React.useState(
    splitEvery(
      width,
      Array.from({ length: width * height }, _ => false),
    ),
  );

  const revealField = (row: number, col: number) => {
    let map = [...revealedMap];
    map[row][col] = true;
    setRevealedMap(prev => map);
  };

  const setReveal = (row: number, col: number, fromSide?: boolean) => {
    switch (gameField[row][col]) {
      case -1:
        if (!fromSide) setGameState(GameStatus.Lost);
        break;
      case 0:
        revealSides(width, height, row, col, setReveal);
      default:
        revealField(row, col);
        break;
    }
  };

  return (
    <GameContext.Provider
      value={{
        difficulty,
        setDifficulty,
        gameField,
        gameState,
        revealedMap,
        revealField,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const GameConsumer = GameContext.Consumer;
