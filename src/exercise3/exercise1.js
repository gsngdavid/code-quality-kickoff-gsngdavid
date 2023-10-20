function calculateAverage(numbers) {
    const sum = numbers.reduce((total, number) => total + number);
    return sum / numbers.length;
}