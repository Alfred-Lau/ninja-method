Array.prototype.reduce2 = (cb, initialValue) => {
  if (this == null) {
    throw new TypeError("Cannot read property 'reduce' of null or undefined");
  }
  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function');
  }
};
