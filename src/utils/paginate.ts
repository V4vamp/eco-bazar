export default function paginate(arr: number[]): (number | string)[] {
  if (arr.length <= 4) return arr;

  return [arr[0], arr[1], arr[2], "...", arr[arr.length - 2], arr[arr.length - 1]];
}