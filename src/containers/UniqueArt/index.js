import { connect } from 'react-redux';

import { openDetails, changePaintingSize, previousToList } from 'src/actions/mainActions';

import UniqueArt from 'src/components/UniqueArt';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  moreDetails: state.main.moreDetails,
  paintingSize: state.main.paintingSize,
  menu: state.main.menu,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Open/Close the "more details" area
   */
  openDetails: () => {
    dispatch(openDetails());
  },

  /**
   * Change the size of the painting to display it on fullscreen
   */
  changePaintingSize: () => {
    dispatch(changePaintingSize());
  },

  /**
   * Send to the previous page of the list and close the "more details" area
   */
  previousToList: () => {
    dispatch(previousToList());
    window.history.back();
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(UniqueArt);
