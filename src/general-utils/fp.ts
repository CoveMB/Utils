import * as R from "ramda";

export const debugLog = <M>(value: M): M => {
  console.log(value);

  return value;
};

export const tryCatchAsync = R.curry(async (_fn, _onError, _object) => {
  try {
    // eslint-disable-next-line @typescript-eslint/return-await
    return await _fn(_object);
  } catch (error) {
    return _onError(error, _object);
  }
});
