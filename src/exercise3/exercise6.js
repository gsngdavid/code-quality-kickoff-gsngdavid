function maxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

maxNumber(100, 100, 10); // Does not work
