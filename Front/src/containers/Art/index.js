import { connect } from 'react-redux';

// import { paintingList } from 'src/data';

import { updateField, searchPaintings, loadingPaintingList } from 'src/actions/mainActions';

import Art from 'src/components/Art';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => {
  /**
   * Function to search some specific paintings, for now it only works with their names
   */
  const listOfSelectedPainting = state.main.paintingsList.filter((entry) => entry.title.toLowerCase().includes(state.main.typedSearch.toLowerCase()));

  console.log(listOfSelectedPainting);

  return {
    paintingList: listOfSelectedPainting,
    typedSearch: state.main.typedSearch,
  };
};

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Function to change the value of the search input
   * @param {string} inputName Name of the current input
   * @param {string} value Value of the current input
   */
  typingSearch: (inputName, value) => {
    dispatch(updateField(inputName, value));
  },

  // /**
  //  * Start the painting research
  //  */
  // searchPaintings: () => {
  //   dispatch(searchPaintings());
  // },

  /**
   * WARNING !!!!!
   * Need to be activated and updated when there will be a database
   * Don't forget to put a loader !!!
   * Load the painting list when arriving on the page
   */
  loadingPaintingList: () => {
    dispatch(loadingPaintingList());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Art);
