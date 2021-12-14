const EASY = {
  width: 10,
  height: 10,
  mine: 10,
};

const INTERMEDIATE = {
  width: 16,
  height: 16,
  mine: 40,
};

const EXPERT = {
  width: 30,
  height: 16,
  mine: 99,
};

export const DIFFICULTY = { EASY, INTERMEDIATE, EXPERT };

export enum GameStatus {
  Pending = 'PENDING',
  Started = 'STARTED',
  Lost = 'LOST',
  Won = 'WON',
}
