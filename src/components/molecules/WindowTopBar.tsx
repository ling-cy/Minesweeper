import { MinesweeperLogo } from '@assets/images';
import styled from 'styled-components';
import React from 'react';
import { BLUE, LIGHT_BLUE } from '@styles/palette';
import WindowButton from '@components/atoms/WindowButton';
import { ButtonType } from '@constants/components';
import Separator from '@components/atoms/Separator';

const StyledWindowTopBarWrapper = styled.div`
  background-image: linear-gradient(90deg, ${BLUE}, ${LIGHT_BLUE});
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 4px;
  justify-content: space-between;
`;

const StyledRightBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StyledLogo = styled.img`
  width: 30px;
  height: 32px;
  margin-right: 10px;
`;

const StyledWindowName = styled.div`
  font-family: ms-sans-serif-bold;
  color: white;
  font-size: 22px;
  letter-spacing: 0.5px;
  &:first-letter {
    margin-right: 3px;
  }
`;

const StyledLeftBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 1px 0px 0px;
`;

const WindowTopBar = () => {
  return (
    <StyledWindowTopBarWrapper>
      <StyledRightBarWrapper>
        <StyledLogo src={MinesweeperLogo} />
        <StyledWindowName>Minesweeper</StyledWindowName>
      </StyledRightBarWrapper>
      <StyledLeftBarWrapper>
        <WindowButton type={ButtonType.Minimize} />
        <WindowButton type={ButtonType.Resize} disabled />
        <Separator x={4} />
        <WindowButton type={ButtonType.Close} />
      </StyledLeftBarWrapper>
    </StyledWindowTopBarWrapper>
  );
};

export default WindowTopBar;
