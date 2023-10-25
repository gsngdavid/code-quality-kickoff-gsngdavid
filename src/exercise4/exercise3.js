// Implement a JavaScript function to find the sum of all elements in an array recursively.

export function getSum(array, sum = 0) {
    if(array.length === 0) return sum;
    return getSum(array.slice(1), sum + array[0]);
}