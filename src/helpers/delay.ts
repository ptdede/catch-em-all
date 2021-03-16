export const delay = (timeout = 5000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      resolve(true);
    }, timeout);
  });
};
