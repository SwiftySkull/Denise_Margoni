// ACTIONS TYPES

export const DISPLAY_MENU = 'DISPLAY_MENU';
export const UPDATE_FIELD = 'UPDATE_FIELD';

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
