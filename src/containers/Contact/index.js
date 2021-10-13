import { connect } from 'react-redux';

import {
  updateField,
  submitContactRequest,
  submitValidation,
  closeRequest,
  requestModification,
} from 'src/actions/mainActions';

import Contact from 'src/components/Contact';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  emailContact: state.main.emailContact,
  nameContact: state.main.nameContact,
  objectDemand: state.main.objectDemand,
  contentDemand: state.main.contentDemand,
  emailError: state.main.emailError,
  nameError: state.main.nameError,
  objectError: state.main.objectError,
  contentError: state.main.contentError,
  validationRequest: state.main.validationRequest,
  requestSent: state.main.requestSent,
  internalRequestError: state.main.internalRequestError,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Function to change the value of an input
   * @param {string} inputName Name of the current input
   * @param {string} value Value of the current input
   */
  updateField: (inputName, value) => {
    dispatch(updateField(inputName, value));
  },

  /**
   * Function to submit the contact request form
   */
  submitContactRequest: () => {
    dispatch(submitContactRequest());
  },

  /**
   * Function to send the request after user verification
   */
  submitValidation: () => {
    dispatch(submitValidation());
  },

  /**
   * Close the overlay after clicking the button
   */
  closeRequest: () => {
    dispatch(closeRequest());
  },

  /**
   * Close the overlay to change the request informations
   */
  requestModification: () => {
    dispatch(requestModification());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
