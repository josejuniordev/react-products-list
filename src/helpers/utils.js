export function delay(timeout) {
  return new Promise(resolve => {
    window.setTimeout(resolve, timeout);
  });
}

export const currencyFormat = function (value, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
};
