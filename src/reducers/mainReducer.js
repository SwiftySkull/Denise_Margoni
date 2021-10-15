import {
  DISPLAY_MENU,
  OPEN_DETAILS,
  CHANGE_PAINTING_SIZE,
} from 'src/actions/mainActions';

const initialState = {
  menu: false,
  moreDetails: false,
  paintingSize: false,
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

    default:
      return state;
  }
}

export default mainReducer;
