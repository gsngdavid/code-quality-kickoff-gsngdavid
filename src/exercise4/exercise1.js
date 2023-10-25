// Write a function(s) that checks the level of nesting of an array.
// Then, use that function to flatten the array into a single-dimensional array.

export function getArrayDepth(array) {
  return Array.isArray(array)
    ? 1 + Math.max(0, ...array.map((element) => getArrayDepth(element)))
    : 0;
}

const numbers = [1, 2, 3, [4, [5, 6, [7, 8]], 9]]

const depth = getArrayDepth(numbers)
// eslint-disable-next-line no-undef
console.log(numbers.flat(depth))