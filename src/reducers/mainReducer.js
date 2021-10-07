// import {
//   DISPLAY_PROPOSITIONS,
//   BENEFICIARY_RECONNECT,
//   FIRST_BENEFICIARY_CONNECTION,
//   REQUEST_UPDATED,
// } from 'src/actions/beneficiaryActions';

const initialState = {
  loader: true,
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    // case LOADER_ON:
    //   return {
    //     ...state,
    //     loader: true,
    //   };

    default:
      return state;
  }
}

export default mainReducer;
