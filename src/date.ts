export const getFullDate = (): string => {
  const now = new Date();

  return `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

export const sleep = (timeToSleepInMilliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, timeToSleepInMilliseconds));
