import {
  DISPLAY_MENU,
  UPDATE_FIELD,
  ERROR_SUBMIT_REQUEST_CONTACT,
  VALIDATION_OF_THE_REQUEST,
  REQUEST_SENT,
  CLOSE_REQUEST,
  REQUEST_MODIFICATION,
  INTERNAL_RECEIVED_REQUEST_ERROR,
} from 'src/actions/mainActions';

const initialState = {
  menu: false,
  emailContact: '',
  nameContact: '',
  objectDemand: '',
  contentDemand: '',
  validationError: true,
  emailError: true,
  nameError: true,
  objectError: true,
  contentError: true,
  validationRequest: false,
  requestSent: false,
  internalRequestError: false,
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Display or hide the sidebar menu
     */
    case DISPLAY_MENU:
      return {
        ...state,
        menu: !state.menu,
      };

    /**
     * Update the value of an input field
     */
    case UPDATE_FIELD:
      return {
        ...state,
        emailContact: action.inputName === 'emailContact' ? action.value : state.emailContact,
        nameContact: action.inputName === 'nameContact' ? action.value : state.nameContact,
        objectDemand: action.inputName === 'objectDemand' ? action.value : state.objectDemand,
        contentDemand: action.inputName === 'contentDemand' ? action.value : state.contentDemand,
      };

    /**
     * Display the error messages for the request submition
     */
    case ERROR_SUBMIT_REQUEST_CONTACT:
      return {
        ...state,
        validationError: false,
        emailError: action.errors.emailError,
        nameError: action.errors.nameError,
        objectError: action.errors.objectError,
        contentError: action.errors.contentError,
      };

    /**
     * Display the validation screen before sending the request
     */
    case VALIDATION_OF_THE_REQUEST:
      return {
        ...state,
        validationError: true,
        emailError: true,
        phoneError: true,
        objectError: true,
        contentError: true,
        validationRequest: true,
      };

    /**
     * Clean the input after user verification of the request and having sent it
     */
    case REQUEST_SENT:
      return {
        ...state,
        requestSent: true,
        emailContact: '',
        nameContact: '',
        objectDemand: '',
        contentDemand: '',
      };

    /**
     * Close the overlay of the notification after sending the request
     */
    case CLOSE_REQUEST:
      return {
        ...state,
        validationRequest: false,
        requestSent: false,
        internalRequestError: false,
      };

    /**
     * Close the verification overlay to change the information of the request
     */
    case REQUEST_MODIFICATION:
      return {
        ...state,
        validationRequest: false,
      };

    /**
     * Show an error message if something wrong happens in the server after sending the request
     */
    case INTERNAL_RECEIVED_REQUEST_ERROR:
      return {
        ...state,
        internalRequestError: true,
        requestSent: false,
      };

    default:
      return state;
  }
}

export default mainReducer;
