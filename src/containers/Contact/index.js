import { connect } from 'react-redux';

import {
  updateField,
} from 'src/actions/mainActions';

import {
  submitContactRequest,
  submitValidation,
  closeRequest,
  requestModification,
} from 'src/actions/contactActions';

import Contact from 'src/components/Contact';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  emailContact: state.contact.emailContact,
  nameContact: state.contact.nameContact,
  objectDemand: state.contact.objectDemand,
  contentDemand: state.contact.contentDemand,
  emailError: state.contact.emailError,
  nameError: state.contact.nameError,
  objectError: state.contact.objectError,
  contentError: state.contact.contentError,
  validationRequest: state.contact.validationRequest,
  requestSent: state.contact.requestSent,
  internalRequestError: state.contact.internalRequestError,
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
