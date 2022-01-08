import WindowTopBar from '@components/molecules/WindowTopBar';
import styled from 'styled-components';
import React from 'react';
import { BG_GREY, SHADOW_GREY, WHITE, BLACK } from '@styles/palette';

const StyledGameWindowWrapper = styled.div`
  background-color: ${BG_GREY};
  display: flex;
  flex-direction: column;
  min-width: 350px;
  min-height: 500px;
  border-style: outset;
  border-width: 2px;
  border-color: ${WHITE} ${BLACK} ${BLACK} ${WHITE};
  padding: 3px;
`;

const StyledSettingBarWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StyledGameAreaWrapper = styled.div`
  background-color: ${BG_GREY};
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 6px;
  border-color: ${WHITE} ${SHADOW_GREY} ${SHADOW_GREY} ${WHITE};
  padding: 14px;
`;

const StyledGamePanelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
  border-width: 4px;
  border-color: ${SHADOW_GREY} ${WHITE} ${WHITE} ${SHADOW_GREY};
  padding: 8px 8px;
`;

const StyledGameFieldWrapper = styled.div`
  border-style: solid;
  border-width: 6px;
  border-color: ${SHADOW_GREY} ${WHITE} ${WHITE} ${SHADOW_GREY};
  margin-top: 14px;
`;

const GameWindow = ({
  settingBar,
  gamePanel,
  gameField,
}: {
  settingBar: React.ReactNode;
  gamePanel: React.ReactNode;
  gameField: React.ReactNode;
}) => {
  return (
    <StyledGameWindowWrapper>
      <WindowTopBar />
      <StyledSettingBarWrapper>{settingBar}</StyledSettingBarWrapper>
      <StyledGameAreaWrapper>
        <StyledGamePanelWrapper>{gamePanel}</StyledGamePanelWrapper>
        <StyledGameFieldWrapper>{gameField}</StyledGameFieldWrapper>
      </StyledGameAreaWrapper>
    </StyledGameWindowWrapper>
  );
};

export default GameWindow;
