import React from 'react';
import { Mine, Flag, WrongMine } from '@assets/images';
import MineNumber from './MineNumber';
import { GameStatus } from '@constants/game';
import styled from 'styled-components';

const StyledImg = styled.img<{ sideWidth: number }>`
  width: ${props => `${props.sideWidth}px`};
  height: ${props => `${props.sideWidth}px`};
`;

const MineContent = ({
  num,
  revealed,
  flagged,
  gameStatus,
}: {
  num: number;
  revealed: boolean;
  flagged: boolean;
  gameStatus: GameStatus;
}) => {
  const content = React.useMemo(() => {
    if (flagged) {
      if (num !== -1 && gameStatus === GameStatus.Lost) {
        return <StyledImg src={WrongMine} sideWidth={28} />;
      }
      return <StyledImg src={Flag} sideWidth={28} />;
    }
    if (revealed) {
      switch (num) {
        case -1:
          return <StyledImg src={Mine} sideWidth={30} />;
        case 0:
          return <></>;
        default:
          return <MineNumber value={num} />;
      }
    }
    return <></>;
  }, [num, revealed, flagged, gameStatus]);

  return content;
};

export default MineContent;
