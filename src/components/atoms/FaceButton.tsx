import { FaceImages } from '@assets/images';
import { GameStatus } from '@constants/game';
import React from 'react';
import styled from 'styled-components';
import { StyledFieldButton } from './FieldButton';

const StyledButton = styled.div`
  width: 52px;
  height: 52px;
  background-image: url(${FaceImages.FaceButton});
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;

  &:active {
    background-image: url(${FaceImages.ActiveFaceButton});
  }
`;

const StyledImg = styled.div<{ src: any }>`
  width: 34px;
  height: 34px;
  background-image: url(${props => props.src});
  background-size: cover;

  ${StyledFieldButton}: active & {
    background-image: url(${FaceImages.OMouthFace});
  }

  ${StyledButton}: active & {
    transform: translate(2px, 2px);
  }
`;

const Face = ({
  gameStatus,
  onClick,
}: {
  gameStatus: GameStatus;
  onClick?: () => void;
}) => {
  const path = React.useMemo(() => {
    switch (gameStatus) {
      case GameStatus.Lost:
        return FaceImages.DeadFace;
      case GameStatus.Won:
        return FaceImages.SunglassesFace;
      default:
        return FaceImages.SmileFace;
    }
  }, [gameStatus]);
  return (
    <StyledButton onClick={onClick}>
      <StyledImg src={path} />
    </StyledButton>
  );
};

export default Face;
