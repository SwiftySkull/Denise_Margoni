/* eslint-disable no-console */
import axios from 'axios';

// import {
//   API_LOAD_FILTERS,
// } from 'src/actions/mainActions';

// URL for the Axios requests
const URL = 'http://54.156.70.255/apo-O-Solidaires-back/public';

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
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
