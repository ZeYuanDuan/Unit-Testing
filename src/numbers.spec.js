import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform string into number", () => {
  const input = "1";
  const expectResult = 1;

  const result = transformToNumber(input);

  expect(result).toBe(expectResult);
});

it("should remain still if the input is number", () => {
  const input = 1;

  const result = transformToNumber(input);

  expect(result).toBe(input);
});

it("should return NaN if the input is not transformable", () => {
  const input = "invalid";

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});

it("should return NaN if input is an array", () => {
  const inputArray = ["1", "2"];

  const result = transformToNumber(inputArray);

  expect(result).toBeNaN();
});
