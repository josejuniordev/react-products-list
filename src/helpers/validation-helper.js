export class ValidationHelper {
  static removeError(key, errors) {
    const index = errors.indexOf(key);

    if (index >= 0) {
      errors.splice(index, 1);
      return [...errors];
    }

    return errors;
  }
}
