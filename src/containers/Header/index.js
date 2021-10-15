import { connect } from 'react-redux';

import { displayMenu } from 'src/actions/mainActions';

import Header from 'src/components/Header';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  menu: state.main.menu,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Show/Hide the sidebar menu
   */
  displayMenu: () => {
    dispatch(displayMenu());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Header);
