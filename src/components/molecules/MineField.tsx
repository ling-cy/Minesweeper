import React from 'react';
import MineButton from '@components/atoms/MineButton';

const MineField = ({
  gameField,
  revealedMap,
  onReveal,
}: {
  gameField: number[][];
  revealedMap: boolean[][];
  onReveal: (row: number, col: number, fromSide?: boolean) => void;
}) => {
  return (
    <>
      {!!gameField &&
        !!revealedMap &&
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
            {row.map((sqNum, colId) => (
              <MineButton
                num={sqNum}
                key={`${rowId}-${colId}`}
                revealed={revealedMap[rowId][colId]}
                onReveal={() => onReveal(rowId, colId)}
              />
            ))}
          </div>
        ))}
    </>
  );
};

export default MineField;
