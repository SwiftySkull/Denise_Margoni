/* eslint-disable no-console */
import axios from 'axios';

import {
} from 'src/actions/mainActions';

import {
  SUBMIT_CONTACT_REQUEST,
  errorSubmitRequestContact,
  validationOfTheRequest,
  SUBMIT_VALIDATION,
  requestSent,
  internalReceivedRequestError,
} from 'src/actions/contactActions';

import { validatorSubmitContactRequest } from 'src/utils/validator';
// import {
//   API_LOAD_FILTERS,
// } from 'src/actions/mainActions';

// URL for the Axios requests
// const URL = 'http://54.156.70.255/apo-O-Solidaires-back/public';

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case SUBMIT_CONTACT_REQUEST: {
      const {
        emailContact,
        nameContact,
        objectDemand,
        contentDemand,
      } = state.contact;
      console.log(emailContact, nameContact, objectDemand, contentDemand);
      const validation = validatorSubmitContactRequest(
        emailContact,
        nameContact,
        objectDemand,
        contentDemand,
      );

      if (validation.validate) {
        store.dispatch(validationOfTheRequest());
        console.log('ENVOIE DE REQUETE DE CONTACT');
      }
      else {
        console.log(validation.errors);
        console.log('REFUS D\'ENVOI DE REQUETE');
        store.dispatch(errorSubmitRequestContact(validation.errors));
      }
      next(action);
      break;
    }

    case SUBMIT_VALIDATION: {
      const {
        emailContact,
        nameContact,
        objectDemand,
        contentDemand,
      } = state.contact;
      console.log(emailContact, nameContact, objectDemand, contentDemand);
      const validation = validatorSubmitContactRequest(
        emailContact,
        nameContact,
        objectDemand,
        contentDemand,
      );

      if (validation.validate) {
        store.dispatch(validationOfTheRequest());
        store.dispatch(requestSent());
        console.log('ENVOIE DE REQUETE DE CONTACT');
      }
      else {
        console.log(validation.errors);
        console.log('UN PROBLEME EST SURVENU');
        store.dispatch(internalReceivedRequestError());
        // store.dispatch(errorSubmitRequestContact(validation.errors));
      }
      next(action);
      break;
    }
    /**
     * Action to get the departments and categories informations.
     */
    // case API_LOAD_FILTERS:
    //   axios.get(`${URL}/categories`)
    //     .then((response) => {
    //       store.dispatch(displayFilters(response.data, 'categoriesFilter'));
    //     })
    //     .catch((error) => {
    //       console.log('CATEGORY FILTER FROM API ERROR', error);
    //     });
    //   axios.get(`${URL}/departments`)
    //     .then((response) => {
    //       // console.log(response.data);
    //       store.dispatch(displayFilters(response.data, 'locationFilter'));
    //     })
    //     .catch((error) => {
    //       console.log('LOCATION FILTER FROM API ERROR', error);
    //     });
    //   next(action);
    //   break;

    // Default action.
    default:
      next(action);
  }
};

export default mainMiddleware;
