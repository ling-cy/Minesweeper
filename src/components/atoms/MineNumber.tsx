import React from 'react';
import { MineNumberImages } from '@assets/images';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
`;

const MineNumber = ({ value }: { value: number }) => {
  const path = React.useMemo(() => {
    if (!!value && typeof value === 'number') {
      switch (value) {
        case 1:
          return MineNumberImages.One;
        case 2:
          return MineNumberImages.Two;
        case 3:
          return MineNumberImages.Three;
        case 4:
          return MineNumberImages.Four;
        case 5:
          return MineNumberImages.Five;
        case 6:
          return MineNumberImages.Six;
        case 7:
          return MineNumberImages.Seven;
        case 8:
          return MineNumberImages.Eight;
        default:
          return null;
      }
    }
    return null;
  }, [value]);

  return <>{!!path && <StyledImg src={path} />}</>;
};

export default MineNumber;
