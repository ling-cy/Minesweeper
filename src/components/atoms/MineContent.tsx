import React from 'react';
import { Mine, Flag } from '@assets/images';
import MineNumber from './MineNumber';

const MineContent = ({
  num,
  revealed,
  flagged,
}: {
  num: number;
  revealed: boolean;
  flagged: boolean;
}) => {
  const content = React.useMemo(() => {
    if (flagged) {
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
  }, [num, revealed, flagged]);

  return content;
};

export default MineContent;
