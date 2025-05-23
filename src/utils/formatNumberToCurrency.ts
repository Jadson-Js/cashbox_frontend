export function formatNumberToCurrency(value: number): string {
  return "$" + value.toFixed(2).toString();
}
