import React, { useEffect } from 'react';
import { splitEvery } from '@util/splitEvery';
import { DIFFICULTY, GameStatus } from '@constants/game';
import { generateField } from '@util/generateField';
import { revealSides } from '@util/revealSides';
import { GameDifficulty } from 'types/game';

type GameContextValueType = {
  difficulty: GameDifficulty;
  setDifficulty: (difficulty: GameDifficulty) => void;
  gameField: number[][];
  gameStatus: GameStatus;
  revealedMap: boolean[][];
  setReveal: (row: number, col: number, fromSide?: boolean) => void;
  isLost: boolean;
  isWon: boolean;
  setFlag: (target: { row: number; col: number }) => void;
};

export const GameContext = React.createContext<GameContextValueType>(
  {} as GameContextValueType,
);

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
  const [gameStatus, setGameStatus] = React.useState(GameStatus.Pending);
  const [revealedMap, setRevealedMap] = React.useState(
    splitEvery(
      width,
      Array.from({ length: width * height }, _ => false),
    ),
  );
  const [flagged, setFlagged] = React.useState<{ row: number; col: number }[]>(
    [],
  );

  const isLost = gameStatus === GameStatus.Lost;
  const isWon = gameStatus === GameStatus.Won;

  const revealField = (row: number, col: number) => {
    let map = [...revealedMap];
    map[row][col] = true;
    setRevealedMap(_ => map);
  };

  const setReveal = (row: number, col: number, fromSide?: boolean) => {
    if (gameStatus === GameStatus.Pending) {
      setGameStatus(GameStatus.Started);
    }
    if (!revealedMap[row][col]) {
      switch (gameField[row][col]) {
        case -1:
          if (!fromSide) {
            setGameStatus(GameStatus.Lost);
            revealField(row, col);
          }
          break;
        case 0:
          revealField(row, col);
          revealSides(width, height, row, col, setReveal);
          break;
        default:
          revealField(row, col);
          break;
      }
    }
  };

  const allFlagged =
    flagged.length === mineNumber &&
    flagged.reduce((allCorrect, flaggedSq) => {
      return allCorrect && gameField[flaggedSq.row][flaggedSq.col] === -1;
    }, true);

  const allDodged =
    height * width - mineNumber ===
    revealedMap.reduce((prev, curr) => {
      return (
        prev +
        curr.reduce((rowPrev, rowCurr) => {
          return rowCurr ? rowPrev + 1 : rowPrev;
        }, 0)
      );
    }, 0);

  React.useEffect(() => {
    if (gameStatus === GameStatus.Started && (allFlagged || allDodged)) {
      setGameStatus(GameStatus.Won);
    }
  }, [allFlagged, allDodged]);

  return (
    <GameContext.Provider
      value={{
        difficulty,
        setDifficulty,
        gameField,
        gameStatus,
        revealedMap,
        setReveal,
        isLost,
        isWon,
        setFlag: (target: { row: number; col: number }) =>
          setFlagged([target, ...flagged]),
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const GameConsumer = GameContext.Consumer;
