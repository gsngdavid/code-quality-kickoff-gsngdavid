// Write a JavaScript function to convert a number to its binary representation

export function toBinary(number) {
  let result = "";
  while (number > 0) {
    const remainder = number % 2;
    result = remainder + result;
    number = Math.floor(number / 2);
  }
  return result;
}
