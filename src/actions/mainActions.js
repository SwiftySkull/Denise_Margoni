// ACTIONS TYPES

export const DISPLAY_MENU = 'DISPLAY_MENU';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const OPEN_DETAILS = 'OPEN_DETAILS';
export const CHANGE_PAINTING_SIZE = 'CHANGE_PAINTING_SIZE';
export const PREVIOUS_TO_LIST = 'PREVIOUS_TO_LIST';

// ACTIONS CREATORS

/**
 * Function to display/hide the side menu
 */
export const displayMenu = () => ({
  type: DISPLAY_MENU,
});

/**
 * Updating the value of a field
 * @param {string} inputName Name of the current input
 * @param {string} value Value of the current input
 */
export const updateField = (inputName, value) => ({
  type: UPDATE_FIELD,
  inputName,
  value,
});

/**
 * Open/Close the "more details" info of a painting
 */
export const openDetails = () => ({
  type: OPEN_DETAILS,
});

/**
 * Change the size of the painting to display it on fullscreen
 */
export const changePaintingSize = () => ({
  type: CHANGE_PAINTING_SIZE,
});

/**
 * Close the "more details" area when closing the page of a painting
 */
export const previousToList = () => ({
  type: PREVIOUS_TO_LIST,
});
