import { flow } from "fp-ts/lib/function";
import * as Ei from "fp-ts/lib/Either";
import { sanitizeObject } from "../general-utils";

export const sanitizeExposedBody = flow(
  sanitizeObject(["password", "email", "token"]),

  (sanitized) => Ei.stringifyJSON(sanitized, Ei.toError),

  Ei.getOrElse((error) => `Could Not Sanitize Body: ${error.message}`)
);
