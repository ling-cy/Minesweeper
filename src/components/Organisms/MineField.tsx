import React from 'react';
import FieldSuare from '../molecules/FieldSquare';
import { FieldStatus, GameStatus } from '@constants/game';

const MineField = ({
  gameField,
  fieldStatus,
  gameStatus,
  onReveal,
  onFlag,
}: {
  gameField: number[][];
  fieldStatus: FieldStatus[][];
  gameStatus: GameStatus;
  onReveal: (row: number, col: number, fromSide?: boolean) => void;
  onFlag: (row: number, col: number) => void;
}) => {
  return (
    <>
      {!!gameField &&
        !!fieldStatus &&
        gameField.map((row, rowId) => (
          <div
            key={`${rowId}-row`}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              minWidth: '200px',
            }}
          >
            {row.map((fieldNum, colId) => {
              const status = fieldStatus[rowId][colId];
              const revealed =
                status === FieldStatus.Revealed ||
                (gameStatus === GameStatus.Lost && fieldNum === -1);
              const disabled =
                gameStatus === GameStatus.Lost || gameStatus === GameStatus.Won;
              return (
                <FieldSuare
                  num={fieldNum}
                  key={`${rowId}-${colId}`}
                  revealed={revealed}
                  flagged={status === FieldStatus.Flagged}
                  last={status === FieldStatus.Last}
                  onReveal={() => onReveal(rowId, colId)}
                  onFlag={() => onFlag(rowId, colId)}
                  disabled={disabled}
                  gameStatus={gameStatus}
                />
              );
            })}
          </div>
        ))}
    </>
  );
};

export default MineField;
