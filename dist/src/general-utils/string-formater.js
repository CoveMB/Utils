"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeName = exports.capitalizeAll = exports.capitalize = void 0;
const function_1 = require("fp-ts/lib/function");
const object_1 = require("./object");
// Will capitalize every part of the word
const capitalizeAll = (word) => word
    .split(" ")
    .map((wordPart) => wordPart.charAt(0).toUpperCase() + wordPart.slice(1))
    .join(" ");
exports.capitalizeAll = capitalizeAll;
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
exports.capitalize = capitalize;
const capitalizeName = function_1.flow(object_1.nameOf, capitalize);
exports.capitalizeName = capitalizeName;
//# sourceMappingURL=string-formater.js.map