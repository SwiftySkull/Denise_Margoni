// ACTIONS TYPES

export const DISPLAY_MENU = 'DISPLAY_MENU';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SUBMIT_CONTACT_REQUEST = 'SUBMIT_CONTACT_REQUEST';
export const ERROR_SUBMIT_REQUEST_CONTACT = 'ERROR_SUBMIT_REQUEST_CONTACT';
export const VALIDATION_OF_THE_REQUEST = 'VALIDATION_OF_THE_REQUEST';
export const SUBMIT_VALIDATION = 'SUBMIT_VALIDATION';
export const REQUEST_SENT = 'REQUEST_SENT';
export const CLOSE_REQUEST = 'CLOSE_REQUEST';
export const REQUEST_MODIFICATION = 'REQUEST_MODIFICATION';
export const INTERNAL_RECEIVED_REQUEST_ERROR = 'INTERNAL_RECEIVED_REQUEST_ERROR';

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
 * Submit the form when a contact request is made
 */
export const submitContactRequest = () => ({
  type: SUBMIT_CONTACT_REQUEST,
});

/**
 * Display the error messages
 * @param {string} errors Array of the error elements
 */
export const errorSubmitRequestContact = (errors) => ({
  type: ERROR_SUBMIT_REQUEST_CONTACT,
  errors,
});

/**
 * Display a validation message before sending the request
 */
export const validationOfTheRequest = () => ({
  type: VALIDATION_OF_THE_REQUEST,
});

/**
 * Send the contact request afeter user verification
 */
export const submitValidation = () => ({
  type: SUBMIT_VALIDATION,
});

/**
 * Display the success message after sending the request
 */
export const requestSent = () => ({
  type: REQUEST_SENT,
});

/**
 * Close the request window to keep navigating
 */
export const closeRequest = () => ({
  type: CLOSE_REQUEST,
});

/**
 * Function to hide the overlay to change the requestions informations
 */
export const requestModification = () => ({
  type: REQUEST_MODIFICATION,
});

/**
 * Show an error message if something wrong occurs on the server after sending the request
 */
export const internalReceivedRequestError = () => ({
  type: INTERNAL_RECEIVED_REQUEST_ERROR,
});
