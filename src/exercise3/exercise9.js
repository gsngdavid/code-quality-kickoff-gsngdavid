function calculateMatrixSum(matrix) {
  return matrix.reduce(
    (total, innerArray) =>
      // Adding subtotal to the overall total
      total + innerArray.reduce((subTotal, number) => subTotal + number),
    0
  );
}
