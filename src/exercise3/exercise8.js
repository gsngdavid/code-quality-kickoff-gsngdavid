export default function discount(totalAmount) {
  if (totalAmount > 100) return totalAmount * 0.1;
  return totalAmount * 0.05;
}
