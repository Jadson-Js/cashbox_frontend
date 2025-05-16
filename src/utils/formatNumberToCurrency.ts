export function formatNumberToCurrency(number: number) {
  return "$" + number.toFixed(2).toString();
}
