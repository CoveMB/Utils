import { getFullDate, idOf, nameOf } from "../../src/general-utils";

test("getFullDate", () => {
  expect(getFullDate().split("/").length).toBe(3);
});

test("nameOf", () => {
  expect(nameOf({ name: "Bob" })).toBe("Bob");
  expect(nameOf({ noName: "" })).toBe("No name");
});

test("idOf", () => {
  expect(idOf({ id: 1 })).toBe(1);

  // @ts-ignore
  expect(idOf({ noId: "" })).toBe(undefined);
});
