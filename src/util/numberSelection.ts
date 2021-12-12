export const numberSelection = (totalNumber: number, selection: number) => {
  if (!totalNumber || !selection) {
    return [];
  }

  let numberDrawn: number[] = [];
  let numberArray: number[] = Array.from({ length: totalNumber }, (_, i) => i);
  const genRandomNumber = (max: number) => Math.floor(Math.random() * max);

  for (let i = selection; i--; ) {
    numberDrawn[i] = genRandomNumber(totalNumber);
    numberArray = numberArray.splice(numberDrawn[i], 1);
  }

  return numberDrawn;
};
