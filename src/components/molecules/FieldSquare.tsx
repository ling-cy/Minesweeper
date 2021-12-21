import { GameStatus } from '@constants/game';
import React from 'react';
import MineButton from '../atoms/MineButton';
import MineContent from '../atoms/MineContent';

const FieldSuare = ({
  num,
  revealed,
  flagged,
  onReveal,
  onFlag,
  disabled,
  last,
  gameStatus,
}: {
  num: number;
  revealed: boolean;
  flagged: boolean;
  onReveal: () => void;
  onFlag: () => void;
  disabled: boolean;
  last: boolean;
  gameStatus: GameStatus;
}) => {
  return (
    <MineButton
      revealed={
        flagged ? gameStatus === GameStatus.Lost && num !== -1 : revealed
      }
      onReveal={onReveal}
      onFlag={onFlag}
      disabled={disabled}
      last={last}
    >
      <MineContent
        num={num}
        revealed={revealed}
        flagged={flagged}
        gameStatus={gameStatus}
      />
    </MineButton>
  );
};

export default FieldSuare;
