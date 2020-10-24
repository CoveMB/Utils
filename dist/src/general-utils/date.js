"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullDate = void 0;
exports.getFullDate = () => {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};
//# sourceMappingURL=date.js.map