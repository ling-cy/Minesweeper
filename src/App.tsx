import React from 'react';
import { generateField } from './util/generateField';

const App = () => {
  const Square = ({ num }: { num: number }) => {
    return (
      <div
        style={{
          display: 'flex',
          width: '40px',
          height: '40px',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid black',
        }}
      >
        <span>{num === -1 ? '*' : `${num}`}</span>
      </div>
    );
  };

  return (
    <div>
      <h1>Minesweeper</h1>
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
            <Square num={sqNum} key={`${rowId}-${colId}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
