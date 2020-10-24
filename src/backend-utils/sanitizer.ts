import { sanitizeObject } from "general-utils";

export const sanitizeExposedBody = sanitizeObject([
  "password",
  "email",
  "token",
]);
