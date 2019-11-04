export function delay(timeout) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, timeout);
  });
}

export function currencyFormat(value, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}

export function clearSpecialCharacters(str = '') {
  return str.replace(/[^a-z0-9]/gi, '');
}

export function generateStringKey(str = '') {
  return clearSpecialCharacters(
    btoa(
      str || +new Date().toString(),
    ),
  );
}
