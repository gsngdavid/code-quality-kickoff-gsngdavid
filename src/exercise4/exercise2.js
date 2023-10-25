// Write a JavaScript function to check if a given number is prime or not.

export function isPrime(number) {
    if(number === 2) return true;
    if(number % 2 === 0) return false;

    for(let index = 3; index <= Math.sqrt(number); index += 2) {
        if(number % index === 0) return false;
    }

    return true;
}