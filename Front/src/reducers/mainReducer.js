import {
  DISPLAY_MENU,
  UPDATE_FIELD,
  OPEN_DETAILS,
  CHANGE_PAINTING_SIZE,
  PREVIOUS_TO_LIST,
  SEARCH_PAINTINGS,
  LOAD_PAINTING_LIST,
} from 'src/actions/mainActions';

import { paintingList } from 'src/data';

const initialState = {
  menu: false,
  moreDetails: false,
  paintingSize: false,
  typedSearch: '',
  searchingPaintings: false,
  paintingsList: paintingList,
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

    case UPDATE_FIELD:
      return {
        ...state,
        typedSearch: action.inputName === 'typedSearch' ? action.value : state.typedSearch,
      };

    /**
     * Open/Close the "more details" area
     */
    case OPEN_DETAILS:
      return {
        ...state,
        moreDetails: !state.moreDetails,
      };

    /**
     * Change the size of the painting to display it on fullscreen
     */
    case CHANGE_PAINTING_SIZE:
      return {
        ...state,
        paintingSize: !state.paintingSize,
      };

    /**
     * Close the "more details" area when closing the page of a painting
     */
    case PREVIOUS_TO_LIST:
      return {
        ...state,
        moreDetails: false,
      };

    /**
     * Start the painting research
     */
    case SEARCH_PAINTINGS:
      return {
        ...state,
        searchingPaintings: !state.searchingPaintings,
      };

    /**
     * WARNING !!!!!!!!!!!!
     * This is replacable in the middleware to get the good list from the database
     * Load all the paintings from the database
     */
    case LOAD_PAINTING_LIST:
      return {
        ...state,
        paintingsList: action.paintingList,
      };

    default:
      return state;
  }
}

export default mainReducer;
