import { numberSelection } from './numberSelection';
import { splitEvery } from './splitEvery';

export const generateField = (
  totalNumber: number,
  selection: number,
  width: number,
) => {
  if (!totalNumber || !selection) {
    return [];
  }
  const mineLocation = numberSelection(totalNumber, selection);
  let oneDField = Array.from({ length: totalNumber }, (_, i) => {
    if (mineLocation.includes(i)) {
      return -1;
    }
    return 0;
  });

  const addRight = (num: number) => {
    if ((num + 1) % width > 0 && oneDField[num + 1] >= 0) {
      oneDField[num + 1]++;
    }
  };
  const addLeft = (num: number) => {
    if (num % width !== 0 && oneDField[num - 1] >= 0) {
      oneDField[num - 1]++;
    }
  };
  const addTop = (num: number) => {
    if (num + width < totalNumber) {
      if (oneDField[num + width] >= 0) oneDField[num + width]++;
      addRight(num + width);
      addLeft(num + width);
    }
  };
  const addBottom = (num: number) => {
    if (num - width >= 0) {
      if (oneDField[num - width] >= 0) oneDField[num - width]++;
      addRight(num - width);
      addLeft(num - width);
    }
  };

  mineLocation.forEach(mine => {
    addRight(mine);
    addLeft(mine);
    addTop(mine);
    addBottom(mine);
  });

  return splitEvery<number>(width, oneDField);
};
