export default class LocalstorageHelper {
  static setData(key, value) {
    if (!key || !value) {
      throw new Error('key and value are requireds!');
    }

    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeData(key) {
    if (!key) {
      throw new Error('key is required!');
    }

    localStorage.removeItem(key);
  }

  static getData(key) {
    if (!key) {
      throw new Error('key is required!');
    }

    return JSON.parse(localStorage.getItem(key));
  }
}
