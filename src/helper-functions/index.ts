/**
 * Randomly selects gradient value from array
 * @returns string of two rgb values
 */
export const generateGradient = (): string => {
  const gradients = [
    'rgb(43, 77, 130), rgb(40, 144, 172)',
    'rgb(140, 85, 250), rgb(143, 230, 243)',
    'rgb(40, 23, 76),rgb(232, 90, 94)',
    'rgb(84, 21, 156),rgb(132, 51, 77)',
    'rgb(61, 103, 216),rgb(65, 80, 170),rgb(53, 69, 115)',
    'rgb(54, 181, 183),rgb(19, 126, 105)',
  ];

  return gradients[Math.floor(Math.random() * gradients.length)];
};

/**
 * Sets value to localStorage
 * @param key
 * @param value
 */
export const setToLS = (key: string, value: string): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Gets value from localStorage
 * @param key
 */
export const getFromLS = (key: string): string | undefined => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};
