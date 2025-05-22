import { validateStringNotEmpty, validateNumber } from "./validation";
import { it, expect, describe } from "vitest";

describe("validateStringNotEmpty()", () => {
  it("should throw error if the input is empty string", () => {
    const input = "";

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow("Invalid input - must not be empty");
  });

  it("should not throw error if the input is valid string", () => {
    const input1 = "test";
    const input2 = "   test   ";
    const input3 = "t e s t";

    const resultFn1 = () => validateStringNotEmpty(input1);
    const resultFn2 = () => validateStringNotEmpty(input2);
    const resultFn3 = () => validateStringNotEmpty(input3);

    expect(resultFn1).not.toThrow();
    expect(resultFn2).not.toThrow();
    expect(resultFn3).not.toThrow();
  });
});

describe("validateNumber()", () => {
  it("should throw error if the input is not an number", () => {
    const input1 = "invalid";
    const input2 = NaN;

    const resultFn1 = () => {
      validateNumber(input1);
    };
    const resultFn2 = () => {
      validateNumber(input2);
    };

    expect(resultFn1).toThrow("Invalid input - must not be NaN");
    expect(resultFn2).toThrow("Invalid input - must not be NaN");
  });

  it("should throw error if the input is numberic", () => {
    const input = "1";

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).toThrow();
  });
});
