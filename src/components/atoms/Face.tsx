import { FaceImages } from '@assets/images';
import { GameStatus } from '@constants/game';
import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 34px;
  height: 34px;
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
