import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform string into number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
});

it("should remain still if the input is number", () => {
  const input = 1;

  const result = transformToNumber(input);

  expect(result).toBe(input);
});

it("should return NaN if the input is not transformable", () => {
  const input = "invalid";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it("should return NaN if input is an array", () => {
  const inputArray = ["1", "2"];

  const result = transformToNumber(inputArray);

  expect(result).toBeNaN();
});
