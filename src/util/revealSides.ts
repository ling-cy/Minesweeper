export const revealSides = (
  width: number,
  height: number,
  row: number,
  col: number,
  setRevealFn: (row: number, col: number, fromSide: boolean) => void,
) => {
  if (row !== 0) setRevealFn(row - 1, col, true); //UP
  if (row !== height - 1) setRevealFn(row + 1, col, true); //BOTTOM
  if (col !== 0) setRevealFn(row, col - 1, true); //LEFT
  if (col !== width - 1) setRevealFn(row, col + 1, true); //RIGHT
};
