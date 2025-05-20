import res from "express/lib/response";
import { add } from "./math";
import { it, expect } from "vitest";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

it("should yield NaN if a least one invalid number is provided", () => {
  // Arrange
  const inputs = [1, "invalid"];

  // Act
  const result = add(inputs);

  // Assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numberic string values is provided", () => {
  const numerics = ["1", "2"];

  const result = add(numerics);

  const expectedResult = numerics.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  // 之所以是代入 resultFn，因為我們「期待這個函式會拋出錯誤」。
  expect(resultFn).toThrow();

  // 錯誤寫法，因為 add() 回傳結果 (即便是個錯誤)，而本身不是個函式
  // expect(add()).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow();
});
