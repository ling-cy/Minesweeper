import React from 'react';
import { Mine, Flag, WrongMine } from '@assets/images';
import MineNumber from './MineNumber';
import { GameStatus } from '@constants/game';

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
        return (
          <img src={WrongMine} style={{ width: '28px', height: '28px' }} />
        );
      }
      return <img src={Flag} style={{ width: '28px', height: '28px' }} />;
    }
    if (revealed) {
      switch (num) {
        case -1:
          return <img src={Mine} style={{ width: '30px', height: '30px' }} />;
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
