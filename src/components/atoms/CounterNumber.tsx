import React from 'react';
import { CounterNumberImages } from '@assets/images';
import styled from 'styled-components';
import { BLACK } from '@styles/palette';

const Separator = styled.div`
  width: 2px;
  height: 46px;
`;

const StyledImg = styled.img`
  width: 26px;
  height: 46px;
`;

const StyledCounterNumberWrapper = styled.div`
  width: 82px;
  height: 46px;
  display: flex;
  flex-direction: row;
  background-color: ${BLACK};
`;

const CounterNumber = ({ value, usage }: { value: number; usage: string }) => {
  const str = React.useMemo(() => {
    let num: number;
    if (!!value && typeof value === 'number') {
      num = value <= 999 ? (value > -100 ? value : -99) : 999;
    } else {
      num = 0;
    }
    return String(num);
  }, [value]);

  const strArray = React.useMemo(() => {
    const defaultArr = str.split('');
    if (value < 0) {
      if (value > -10) {
        defaultArr.splice(1, 0, '0');
      }
      return defaultArr;
    } else {
      const zeroArr = Array.from({ length: 3 - defaultArr.length }, _ => '0');
      return [...zeroArr, ...defaultArr];
    }
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
        case '-':
          return CounterNumberImages.Negative;
      }
    },
    [value],
  );

  return (
    <StyledCounterNumberWrapper>
      {strArray.map((num, idx) => (
        <React.Fragment key={`${usage}-${idx}`}>
          {idx !== 0 && <Separator />}
          <StyledImg src={path(num)} />
        </React.Fragment>
      ))}
    </StyledCounterNumberWrapper>
  );
};

export default CounterNumber;
