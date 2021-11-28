import { connect } from 'react-redux';

// import { logout } from 'src/actions/mainActions';

import App from 'src/components/App';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  // let picture = state.beneficiary.personnalInfos.picture === null || state.beneficiary.personnalInfos.picture === '' ? randomPicture()
  //   : `data:image/jpg;base64, ${state.beneficiary.personnalInfos.picture}`;

  // if (localStorage.getItem('role') === 'benevole') {
  //   picture = state.volunteer.personnalInfos.picture === null || state.volunteer.personnalInfos.picture === '' ? randomPicture()
  //     : `data:image/jpg;base64, ${state.volunteer.personnalInfos.picture}`;
  // }

  // let picture = `data:image/jpg;base64, ${state.beneficiary.personnalInfos.picture}`;

  // if (localStorage.getItem('role') === 'benevole') {
  //   picture = `data:image/jpg;base64, ${state.volunteer.personnalInfos.picture}`;
  // }

  // return {
  //   role: state.main.role,
  //   picture,
  // };
};

// const mapStateToProps = (state) => ({
//   modificationStatus: state.main.modificationStatus,
// });


/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Action to let the user disconnect.
   */
  // logout: () => {
  //   dispatch(logout());
  // },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(App);
