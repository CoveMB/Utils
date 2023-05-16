import * as R from "ramda";

export const logDebug = <M>(value: M): M => {
  console.log(value);

  return value;
};

export const tryCatchAsync = R.curry(async (_function, _onError, _object) => {
  try {
    return await _function(_object);
  } catch (error) {
    return _onError(error, _object);
  }
});

export const pipeAsync =
  <T, Y = unknown>(...fns: any[]) =>
  async (input?: Y): Promise<T> =>
    fns.reduce(
      (promise, function_) => promise.then(function_),
      Promise.resolve(input)
    );

export const transverse =
  async (functionToExecute: () => Promise<void> | void) =>
  async <M>(inputToTransverse: M): Promise<M> => {
    await functionToExecute();

    return inputToTransverse;
  };
