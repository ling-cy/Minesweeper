import StyledTypography from '@components/atoms/Typography';
import { BG_GREY, BLUE, SHADOW_GREY, WHITE } from '@styles/palette';
import React from 'react';
import styled from 'styled-components';

const BottomRightWrapper = styled.div<{ menu?: boolean; pressed: boolean }>`
  border-width: 0px 2px 2px 0px;
  border-color: ${props => (!props.menu && props.pressed ? WHITE : BG_GREY)};
  border-style: solid;
`;

const StyledTextButton = styled.div<{ menu?: boolean; pressed: boolean }>`
  height: ${props => (props.menu ? 34 : 32)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justerfy-content: ${props => (props.menu ? 'flex-start' : 'center')};
  padding: 0px 10px;
  border-width: 2px 0px 0px 2px;
  border-color: ${props =>
    !props.menu && props.pressed ? SHADOW_GREY : BG_GREY};
  border-style: solid;
  ${BottomRightWrapper}: hover & {
    background-color: ${BLUE};
  }
  ${props => props.pressed && '>*{transform: translate(2px, 2px)}'}
`;

const StyledButtonTypography = styled(StyledTypography)`
  ${BottomRightWrapper}: hover & {
    color: ${WHITE};
  }
`;

const TextButton = ({
  text,
  secondaryText,
  menu,
  pressdownable,
  onClickCallbacks,
}: {
  text?: string;
  secondaryText?: string;
  menu?: boolean;
  pressdownable?: boolean;
  onClickCallbacks?: () => void;
}) => {
  const [pressed, setPressed] = React.useState(false);

  const handleClick = () => {
    if (pressdownable) {
      setPressed(!pressed);
    }
    if (!!onClickCallbacks) onClickCallbacks();
  };
  return (
    <BottomRightWrapper onClick={handleClick} menu={menu} pressed={pressed}>
      <StyledTextButton menu={menu} pressed={pressed}>
        <StyledButtonTypography>{text || ''}</StyledButtonTypography>
      </StyledTextButton>
    </BottomRightWrapper>
  );
};

export default TextButton;
