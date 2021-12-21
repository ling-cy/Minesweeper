import React from 'react';
import { CounterNumberImages } from '@assets/images';

const CounterNumber = ({ value, usage }: { value: number; usage: string }) => {
  const str = React.useMemo(() => {
    let num: number;
    if (!!value && typeof value === 'number') {
      num = value > 999 ? 999 : value;
    } else {
      num = 0;
    }
    return String(num);
  }, [value]);

  const strArray = React.useMemo(() => {
    const defaultArr = str.split('');
    const zeroArr = Array.from({ length: 3 - defaultArr.length }, _ => '0');
    return [...zeroArr, ...defaultArr];
  }, [str]);

  const path = React.useCallback(
    (num: string) => {
      switch (num) {
        case '1':
          return CounterNumberImages.One;
        case '2':
          return CounterNumberImages.Two;
        case '3':
          return CounterNumberImages.Three;
        case '4':
          return CounterNumberImages.Four;
        case '5':
          return CounterNumberImages.Five;
        case '6':
          return CounterNumberImages.Six;
        case '7':
          return CounterNumberImages.Seven;
        case '8':
          return CounterNumberImages.Eight;
        case '9':
          return CounterNumberImages.Nine;
        case '0':
          return CounterNumberImages.Zero;
      }
    },
    [value],
  );

  return (
    <div
      style={{
        width: '82px',
        height: '46px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'black',
      }}
    >
      {strArray.map((num, idx) => (
        <>
          {idx !== 0 && <div style={{ width: '2px', height: '46px' }} />}
          <img
            key={`${usage}-${idx}`}
            src={path(num)}
            style={{ width: '26px', height: '46px' }}
          />
        </>
      ))}
    </div>
  );
};

export default CounterNumber;
