export function formatString(str) {
  return parseFloat(str.replace(',', '.'));
}

export function formatValue(value) {
  return value.toString().replace('.', ',')
}

export function getMax(array) {
  return formatValue(Math.max(...array));
}

export function getMin(array) {
  return formatValue(Math.min(...array));
}

export function getAverage(array) {
  return formatValue(array.reduce((a, b) => a + b, 0) / array.length);
}
