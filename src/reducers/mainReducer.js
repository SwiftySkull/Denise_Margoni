import {
  DISPLAY_MENU,
} from 'src/actions/mainActions';

const initialState = {
  menu: false,
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

    default:
      return state;
  }
}

export default mainReducer;
