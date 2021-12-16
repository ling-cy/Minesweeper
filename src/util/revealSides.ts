export const revealSides = (
  width: number,
  height: number,
  row: number,
  col: number,
  setRevealFn: (row: number, col: number, fromSide: boolean) => void,
) => {
  const notTopEdge = row > 0;
  const notBottomEdge = row < height - 1;
  const notLeftEdge = col > 0;
  const notRightEdge = col < width - 1;

  setTimeout(() => {
    if (notTopEdge) {
      setRevealFn(row - 1, col, true);
      if (notLeftEdge) setRevealFn(row - 1, col - 1, true);
      if (notRightEdge) setRevealFn(row - 1, col + 1, true);
    }
    if (notBottomEdge) {
      setRevealFn(row + 1, col, true);
      if (notLeftEdge) setRevealFn(row + 1, col - 1, true);
      if (notRightEdge) setRevealFn(row + 1, col + 1, true);
    }
    if (notLeftEdge) {
      setRevealFn(row, col - 1, true);
    }
    if (notRightEdge) {
      setRevealFn(row, col + 1, true);
    }
  }, 10);
};
