export const allSettledPromises = async <TPromiseValue, TError = Error>(
  promises: Promise<TPromiseValue>[]
) =>
  await Promise.all(
    promises.map(async (promise) => {
      try {
        return {
          status: "fulfilled",
          value: await promise,
        };
      } catch (error) {
        return {
          status: "rejected",
          reason: error as TError,
        };
      }
    })
  );

export const asyncSequentialMap = async <TItem, TReturn>(
  arrayToMapOn: TItem[],
  callbackToExecuteOnItem: (item: TItem) => Promise<TReturn>,
  initialValue: TReturn[] = []
) =>
  await arrayToMapOn.reduce(
    async (accumulator, item) => [
      ...(await accumulator),
      await callbackToExecuteOnItem(item),
    ],
    Promise.resolve(initialValue)
  );
