// Implement a JavaScript function to remove duplicate elements from an array

export function removeDuplicates(array) {
    return [...new Set(array)];
}