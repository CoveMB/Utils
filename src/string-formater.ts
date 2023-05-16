import { flow } from "fp-ts/lib/function";
import { nameOf } from "./object";

// Will capitalize every part of the word
const capitalizeAll = (word: string) =>
  word
    .split(" ")
    .map((wordPart) => wordPart.charAt(0).toUpperCase() + wordPart.slice(1))
    .join(" ");

const capitalize = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

const capitalizeName = flow(nameOf, capitalize);

export { capitalize, capitalizeAll, capitalizeName };
