import { flow } from "fp-ts/lib/function";
import { sanitizeObject } from "../general-utils";

export const sanitizeExposedBody = flow(
  sanitizeObject(["password", "email", "token"]),
  JSON.stringify
);
