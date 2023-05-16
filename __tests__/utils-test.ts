import { getFullDate, idOf, isNumericString, nameOf } from "../src";

test("getFullDate", () => {
  expect(getFullDate().split("/").length).toBe(3);
});

test("nameOf", () => {
  expect(nameOf({ name: "Bob" })).toBe("Bob");
  expect(nameOf({ noName: "" })).toBe("No name");
});

test("idOf", () => {
  expect(idOf({ id: 1 })).toBe(1);

  expect(idOf({ noId: "" })).toBe(undefined);
});

test("isNumericString", () => {
  expect(isNumericString("testWrong")).toBe(false);
  expect(isNumericString("1.1")).toBe(false);
  expect(isNumericString("1:1")).toBe(false);
  expect(isNumericString("1,1")).toBe(false);
  expect(isNumericString("1sd3")).toBe(false);
  expect(isNumericString("1")).toBe(true);
  expect(isNumericString("4657678")).toBe(true);
  expect(isNumericString("-4657678")).toBe(true);
});
