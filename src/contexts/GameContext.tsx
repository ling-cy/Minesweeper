import React from 'react';
import { splitEvery } from '@util/splitEvery';
import { DIFFICULTY, GameStatus, FieldStatus } from '@constants/game';
import { generateField } from '@util/generateField';
import { revealSides } from '@util/revealSides';
import { GameDifficulty } from 'types/game';

// gameField: -1 = mine, 0 = no mine nearby, 1-8 = number of mine nearby

type GameContextValueType = {
  difficulty: GameDifficulty;
  setDifficulty: (difficulty: GameDifficulty) => void;
  gameField: number[][];
  fieldStatus: FieldStatus[][];
  setReveal: (row: number, col: number, fromSide?: boolean) => void;
  setFlag: (row: number, col: number) => void;
  gameStatus: GameStatus;
  isLost: boolean;
  isWon: boolean;
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
  const [fieldStatus, setFieldStatus] = React.useState<FieldStatus[][]>(
    splitEvery(
      width,
      Array.from({ length: width * height }, _ => FieldStatus.Untouched),
    ),
  );
  const [flagged, setFlagged] = React.useState<{ row: number; col: number }[]>(
    [],
  );

  const isLost = gameStatus === GameStatus.Lost;
  const isWon = gameStatus === GameStatus.Won;

  const changeFieldStatus = (row: number, col: number, status: FieldStatus) => {
    let map = [...fieldStatus];
    map[row][col] = status;
    setFieldStatus(_ => map);
  };

  const setReveal = (row: number, col: number, fromSide?: boolean) => {
    if (gameStatus === GameStatus.Pending) {
      setGameStatus(GameStatus.Started);
    }
    if (fieldStatus[row][col] === FieldStatus.Untouched) {
      switch (gameField[row][col]) {
        case -1:
          if (!fromSide) {
            setGameStatus(GameStatus.Lost);
            changeFieldStatus(row, col, FieldStatus.Last);
          }
          break;
        case 0:
          revealSides(width, height, row, col, setReveal);
        default:
          changeFieldStatus(row, col, FieldStatus.Revealed);
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
    mineNumber ===
    fieldStatus.reduce((prev, curr) => {
      return (
        prev +
        curr.reduce((rowPrev, rowCurr) => {
          return rowCurr !== FieldStatus.Revealed ? rowPrev + 1 : rowPrev;
        }, 0)
      );
    }, 0);

  React.useEffect(() => {
    if (gameStatus === GameStatus.Started && (allFlagged || allDodged)) {
      setGameStatus(GameStatus.Won);
    }
  }, [allFlagged, allDodged]);

  const setFlag = (row: number, col: number) => {
    if (fieldStatus[row][col] === FieldStatus.Untouched) {
      changeFieldStatus(row, col, FieldStatus.Flagged);
    } else if (fieldStatus[row][col] === FieldStatus.Flagged) {
      changeFieldStatus(row, col, FieldStatus.Untouched);
    }
  };
  return (
    <GameContext.Provider
      value={{
        difficulty,
        setDifficulty,
        gameField,
        gameStatus,
        fieldStatus,
        setReveal,
        setFlag,
        isLost,
        isWon,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const GameConsumer = GameContext.Consumer;
