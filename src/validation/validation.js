export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error("Invalid input - must not be empty");
  }
}

export function validateNumber(number) {
  if (isNaN(number) | (typeof number !== "number")) {
    throw new Error("Invalid input - must not be NaN");
  }
}
