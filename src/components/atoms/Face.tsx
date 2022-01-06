import { FaceImages } from '@assets/images';
import { GameStatus } from '@constants/game';
import React from 'react';
import styled from 'styled-components';
import { StyledFieldButton } from './FieldButton';

const StyledImg = styled.div<{ src: any }>`
  width: 34px;
  height: 34px;
  background-image: url(${props => props.src});
  background-size: cover;

  ${StyledFieldButton}: active & {
    background-image: 'url(${FaceImages.OMouthFace})';
  }
`;

const Face = ({ gameStatus }: { gameStatus: GameStatus }) => {
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

  return <StyledImg src={path} />;
};

export default Face;
