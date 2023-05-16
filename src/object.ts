import { curry, omit, prop, propOr } from "ramda";

export const nameOf = propOr("No name", "name");
export const idOf = prop("id");

export const sanitizeObject = curry(
  <M extends Record<string, any>>(keysToSanitize: string[], object: M) =>
    omit(keysToSanitize, object)
);

export const readOnly = <M = Record<string, unknown>>(
  object: M
): Readonly<M> => {
  // @ts-expect-error
  Object.values(object).forEach((value) => {
    if (value && typeof value === "object") {
      readOnly(value);
    }
  });

  return Object.freeze(object);
};

export const isEqualObject = <T extends Record<string, any>>(
  objectOne: T,
  objectTwo: T
): boolean =>
  Object.entries(objectOne).reduce(
    (equalityResult, [currentObjectOneKey, keyValueOfObjectOne]) => {
      if (!equalityResult) {
        return false;
      }

      const keyValueOfObjectTwo = objectTwo[currentObjectOneKey];

      if (
        keyValueOfObjectOne instanceof Object &&
        keyValueOfObjectTwo instanceof Object
      ) {
        return isEqualObject(keyValueOfObjectOne, keyValueOfObjectTwo);
      }

      return keyValueOfObjectOne === keyValueOfObjectTwo;
    },
    true
  );
