import React from 'react';
import styled from 'styled-components';
import { WindowButtons } from '@assets/images';
import { SHADOW_GREY, BLACK, WHITE, BG_GREY } from '@styles/palette';
import { ButtonType } from '@constants/components';

type WindowButtonProps = {
  type: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
};

type StyledProps = Pick<WindowButtonProps, 'disabled'>;

const BottomRightWrapper = styled.div`
  border-width: 0px 2px 2px 0px;
  border-color: ${BLACK};
  border-style: solid;
`;

const TopLeftWrapper = styled.div<StyledProps>`
  border-width: 2px 0px 0px 2px;
  border-color: ${WHITE};
  border-style: solid;
  ${props =>
    !props.disabled &&
    `
      ${BottomRightWrapper}: active & {
        border-color: ${SHADOW_GREY};
      }`}
`;

const StyledButtonBody = styled.div<StyledProps>`
  width: 26px;
  height: 22px;
  background-color: ${BG_GREY};
  border-width: 0px 2px 2px 0px;
  border-color: ${SHADOW_GREY};
  border-style: solid;
  ${props =>
    !props.disabled &&
    `
      ${BottomRightWrapper}: active & {
        border-color: ${WHITE};
      }`}
`;

const StyledImg = styled.img<StyledProps>`
  width: 26px;
  height: 22px;
  ${props =>
    !props.disabled &&
    `
      ${BottomRightWrapper}: active & {
        transform: translate(2px, 2px);
      }`}
`;

const WindowButton = ({ type, disabled, onClick }: WindowButtonProps) => {
  const ImagePath = React.useMemo(() => {
    switch (type) {
      case ButtonType.Close:
        return WindowButtons.Close;
      case ButtonType.Minimize:
        return WindowButtons.Minimize;
      case ButtonType.Resize:
        return WindowButtons.ResizeDis;
    }
  }, [type]);

  const handleClick = e => {
    if (!disabled && !!onClick) {
      onClick();
    }
  };

  return (
    <BottomRightWrapper onClick={handleClick}>
      <TopLeftWrapper disabled={disabled}>
        <StyledButtonBody disabled={disabled}>
          <StyledImg src={ImagePath} disabled={disabled} />
        </StyledButtonBody>
      </TopLeftWrapper>
    </BottomRightWrapper>
  );
};

export default WindowButton;
