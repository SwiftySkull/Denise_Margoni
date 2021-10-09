// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Art from 'src/containers/Art';
import Actualites from 'src/containers/Actualites';
import Vie from 'src/containers/Vie';
import Contact from 'src/containers/Contact';
import Home from 'src/containers/Home';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';

// == Import
import reactLogo from 'src/assets/image/tableaux/test.JPG';
import './styles.scss';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <div id="main">
      <img src={reactLogo} alt="react logo" />
      <h1>Louis : App</h1>
      <Switch>
        <Route path="/art">
          <Art />
        </Route>
        <Route path="/vie">
          <Vie />
        </Route>
        <Route path="/actualite">
          <Actualites />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    <Footer />
  </div>
);

// == Export
export default App;

// const OSolidaires = ({
//   loader,
//   // connectedUser,
//   loadFilters,
//   reconnectUser,
//   loaderOff,
// }) => {
//   /**
//    * Action when the user first enters the website or refresh a page.
//    */
//   useEffect(() => {
//     loadFilters();
//     if (localStorage.getItem('connectedUser') && localStorage.getItem('token')) {
//       console.log('reconnexion');
//       reconnectUser();
//     }
//     else {
//       loaderOff();
//     }
//   }, []);

//   return (
//     <div className="osolidaires">
//       {localStorage.getItem('connectedUser') && <Header />}
//       {!localStorage.getItem('connectedUser') && <HomeHeader />}
//       <main>
//         {loader && <Loader />}
//         {!loader
//           && (
//           <Switch>

//             <Route path="/">
//               <HomeMain />
//             </Route>

//             <Route to="">
//               <Error />
//             </Route>
//           </Switch>
//           )}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// OSolidaires.propTypes = {
//   loader: PropTypes.bool.isRequired,
//   // connectedUser: PropTypes.bool.isRequired,
//   loadFilters: PropTypes.func.isRequired,
//   reconnectUser: PropTypes.func.isRequired,
//   loaderOff: PropTypes.func.isRequired,
// };
