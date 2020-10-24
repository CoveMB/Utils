"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const general_utils_1 = require("../../src/general-utils");
test("getFullDate", () => {
    expect(general_utils_1.getFullDate().split("/").length).toBe(3);
});
test("nameOf", () => {
    expect(general_utils_1.nameOf({ name: "Bob" })).toBe("Bob");
    expect(general_utils_1.nameOf({ noName: "" })).toBe("No name");
});
test("idOf", () => {
    expect(general_utils_1.idOf({ id: 1 })).toBe(1);
    // @ts-ignore
    expect(general_utils_1.idOf({ noId: "" })).toBe(undefined);
});
//# sourceMappingURL=utils-test.js.map