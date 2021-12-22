import { FaceImages } from '@assets/images';
import { GameStatus } from '@constants/game';
import React from 'react';

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

  return <img src={path} style={{ width: '34px', height: '34px' }} />;
};

export default Face;
