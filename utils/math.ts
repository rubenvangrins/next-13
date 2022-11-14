export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
export const vwToPx = (px: number, vw: number) => ((window.innerWidth / vw) * px);
export const calcHeight = (px: number) => (window.innerHeight / 900) * px;
export const isEven = (n: number) => n % 2 === 0;
export const duplicateArr = (arr: any, times: number) => Array(times).fill([...arr]).reduce((a, b) => a.concat(b));
export function timeout(ms: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}
