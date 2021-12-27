import { MinesweeperLogo } from '@assets/images';
import styled from 'styled-components';
import React from 'react';
import { BLUE } from '@styles/palette';

const StyledWIndowTopBarWrapper = styled.div`
  background-color: ${BLUE};
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledRightBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 4px;
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

const WindowTopBar = () => {
  return (
    <StyledWIndowTopBarWrapper>
      <StyledRightBarWrapper>
        <StyledLogo src={MinesweeperLogo} />
        <StyledWindowName>Minesweeper</StyledWindowName>
      </StyledRightBarWrapper>
      <div></div>
    </StyledWIndowTopBarWrapper>
  );
};

export default WindowTopBar;
