import { GameStatus } from '@constants/game';
import React from 'react';
import FieldButton from '../atoms/FieldButton';
import FieldContent from '../atoms/FieldContent';

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
    <FieldButton
      revealed={
        flagged ? gameStatus === GameStatus.Lost && num !== -1 : revealed
      }
      flagged={flagged}
      onReveal={onReveal}
      onFlag={onFlag}
      disabled={disabled}
      last={last}
    >
      <FieldContent
        num={num}
        revealed={revealed}
        flagged={flagged}
        gameStatus={gameStatus}
      />
    </FieldButton>
  );
};

export default FieldSuare;
