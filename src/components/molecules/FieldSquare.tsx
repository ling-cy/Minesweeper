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
}: {
  num: number;
  revealed: boolean;
  flagged: boolean;
  onReveal: () => void;
  onFlag: () => void;
  disabled: boolean;
  last: boolean;
}) => {
  return (
    <MineButton
      revealed={revealed}
      onReveal={onReveal}
      onFlag={onFlag}
      disabled={disabled}
      last={last}
    >
      <MineContent num={num} revealed={revealed} flagged={flagged} />
    </MineButton>
  );
};

export default FieldSuare;
