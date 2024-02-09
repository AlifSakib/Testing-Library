import { it, test, expect } from "vitest";
import { add } from "./math";

it("should return the correct sum if an array of number is provided", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expected_result = numbers.reduce((acc, curr) => acc + curr);
  // Action
  const result = add(numbers);
  // Assertion
  expect(result).toBe(expected_result);
});

it("should provide NaN if atleast 1 invalid number is given", () => {
  // Arrange
  const numbers = [1, "invalid", 3];
  // Action
  const result = add(numbers);
  // Assertion
  expect(result).toBeNaN();
});

it("should provide correct sum if array of numeric string provided", () => {
  // Arrange
  const numbers = ["1", "2", "3"];
  const expected_result = numbers.reduce((acc, curr) => +acc + +curr);
  // Action
  const result = add(numbers);
  // Assertion
  expect(result).toBe(expected_result);
});
