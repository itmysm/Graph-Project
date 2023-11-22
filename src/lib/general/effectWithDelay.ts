export const effectWithDelay = (value: any, delay = 300) => {
  setTimeout(() => {
    return value;
  }, delay);
};
