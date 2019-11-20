function uniqueKey() {
  return `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
}

// eslint-disable-next-line import/prefer-default-export
export { uniqueKey };
