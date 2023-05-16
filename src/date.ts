export const getFullDate = (): string => {
  const now = new Date();

  return `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

// eslint-disable-next-line require-await
export const sleep = async (timeToSleepInMilliseconds: number) =>
  // eslint-disable-next-line promise/avoid-new, @typescript-eslint/return-await, no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, timeToSleepInMilliseconds));
