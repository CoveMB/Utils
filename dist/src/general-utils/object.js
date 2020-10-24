"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idOf = exports.nameOf = void 0;
const ramda_1 = require("ramda");
exports.nameOf = ramda_1.propOr("No name", "name");
exports.idOf = ramda_1.prop("id");
//# sourceMappingURL=object.js.map