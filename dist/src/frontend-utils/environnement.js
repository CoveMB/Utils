"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLocation = exports.isBrowser = void 0;
exports.isBrowser = () => typeof window !== 'undefined';
exports.isLocation = (location) => exports.isBrowser() && window.location.pathname.includes(location);
//# sourceMappingURL=environnement.js.map