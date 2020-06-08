export function formatString(str) {
  return parseFloat(str.replace(',', '.'));
}

export function formatValue(value) {
  return value.toString().replace('.', ',')
}

export function getMax(array) {
  return formatValue(Math.max(...filterByValue(array)));
}

export function getMin(array) {
  return formatValue(Math.min(...filterByValue(array)));
}

export function getAverage(array) {
  return formatValue((filterByValue(array).reduce((a, b) => a + b, 0) / array.length).toFixed(2));
}

export function filterByValue(array) {
  return array.map((node) => {
    return formatString(node.Valor);
  });
}

export function formatData(array) {
  return array.map((node) => {
    const obj = {};
    obj.Fecha = node.Fecha;
    obj.Valor = formatString(node.Valor);
    return obj;
  });
}