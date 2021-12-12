export const numberSelection = (totalNumber: number, selection: number) => {
  if (!totalNumber || !selection) {
    return [];
  }

  const numbersDrawn: number[] = [];
  let numberArray: number[] = Array.from({ length: totalNumber }, (_, i) => i);
  const genRandomNumber = (max: number) => Math.floor(Math.random() * max);

  for (let i = selection; i--; ) {
    const drawnNumberIdx = genRandomNumber(numberArray.length);
    const drawnNumber = numberArray[drawnNumberIdx];
    numbersDrawn.push(drawnNumber);
    numberArray = numberArray.filter(d => d !== drawnNumber);
  }

  return numbersDrawn;
};
