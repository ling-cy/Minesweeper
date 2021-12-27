import { GameStatus } from '@constants/game';
import React from 'react';
import CounterNumber from '../atoms/CounterNumber';

const Timer = ({ gameStatus }: { gameStatus: GameStatus }) => {
  const [time, setTime] = React.useState(0);
  const [stop, setStop] = React.useState(true);

  React.useEffect(() => {
    if (!stop && time < 999) {
      setTimeout(() => {
        if (gameStatus === GameStatus.Started) setTime(prev => prev + 1);
      }, 1000);
    }
    if (gameStatus === GameStatus.Started && stop) {
      setStop(false);
    }
    if (gameStatus === GameStatus.Won || gameStatus === GameStatus.Lost) {
      setStop(true);
    }
  }, [time, stop, gameStatus]);

  return <CounterNumber value={time} usage="timer" />;
};

export default Timer;
