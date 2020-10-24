import { prop, propOr } from "ramda";

export const nameOf = propOr("No name", "name");
export const idOf = prop("id");
