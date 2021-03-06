import React from 'react';
import styled from 'styled-components';
import { BG_GREY, SHADOW_GREY, WHITE, RED } from '@styles/palette';

export const StyledFieldButton = styled.button<
  Pick<FieldButtonType, 'revealed' | 'last' | 'flagged'>
>`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: ${props => (props.revealed ? '2px 0px 0px 2px' : '4px')};
  border-color: ${props =>
    props.revealed
      ? SHADOW_GREY
      : `${WHITE} ${SHADOW_GREY} ${SHADOW_GREY} ${WHITE}`};
  background-color: ${props => (props.last ? RED : BG_GREY)};
  ${props =>
    !props.flagged &&
    `&:active {
    border-width: 2px 0px 0px 2px;
    border-color: ${SHADOW_GREY};
  }`}
`;

type FieldButtonType = {
  revealed: boolean;
  onReveal: () => void;
  onFlag: () => void;
  flagged: boolean;
  disabled: boolean;
  last: boolean;
  children?: React.ReactNode;
};

const FieldButton = (props: FieldButtonType) => {
  const { onReveal, onFlag, children, ...otherProps } = props;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.button === 0) {
      onReveal();
    }
  };

  const handleContextMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (e.button !== 0) {
      onFlag();
    }
  };

  return (
    <StyledFieldButton
      {...otherProps}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      {children}
    </StyledFieldButton>
  );
};

export default FieldButton;
