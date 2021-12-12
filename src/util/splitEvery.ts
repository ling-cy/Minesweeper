export const splitEvery = (n: number, arr: any[], insertEmpty?: boolean) => {
  if (n <= 0 || arr.length === 0) return [];

  let result = [];
  let idx = 0;
  while (idx < arr.length) {
    result.push(arr.slice(idx, (idx += n)));
  }

  return result;
};
