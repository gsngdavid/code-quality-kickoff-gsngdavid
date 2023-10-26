// Implement a JavaScript function to calculate the Fibonacci sequence up to a given number

export function fibonacci(limit, sequence = [0, 1]) {
  if (limit <= 0) return "Invalid limit";
  if (limit === 1) return 0;
  if (limit === 2) return sequence.toString();
  const lastIndex = sequence.length - 1;
  return fibonacci(--limit, [
    ...sequence,
    sequence[lastIndex] + sequence[lastIndex - 1],
  ]);
}
