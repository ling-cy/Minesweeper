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
  console.log(mineLocation);
  let oneDField = Array.from({ length: totalNumber }, (_, i) => {
    if (mineLocation.find(d => d === i)) {
      return -1;
    }
    return 0;
  });

  mineLocation.forEach(mine => {
    if (
      mine < totalNumber - 1 &&
      (mine + 1) % width > 0 &&
      oneDField[mine + 1] >= 0
    ) {
      oneDField[mine + 1]++;
    }
    if (mine > 0 && (mine - 1) % width && oneDField[mine - 1] >= 0) {
      oneDField[mine - 1]++;
    }
    if (mine + width < totalNumber && oneDField[mine + width] >= 0) {
      oneDField[mine + width]++;
    }
    if (mine - width >= 0 && oneDField[mine + width] >= 0) {
      oneDField[mine - width]++;
    }
  });

  return splitEvery(width, oneDField);
};
