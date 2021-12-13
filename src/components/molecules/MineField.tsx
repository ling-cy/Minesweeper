import React from 'react';
import { generateField } from '../../util/generateField';
import MineButton from '../atoms/MineButton';

const MineField = () => {
  return (
    <>
      {generateField(25, 5, 5).map((row, rowId) => (
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
            <MineButton num={sqNum} key={`${rowId}-${colId}`} />
          ))}
        </div>
      ))}
    </>
  );
};

export default MineField;
