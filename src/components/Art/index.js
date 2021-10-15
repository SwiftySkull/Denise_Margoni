// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';



import Abbaye from 'src/assets/image/touslestableaux/Abbaye.JPG';
import Abbaye_Encadre_1 from 'src/assets/image/touslestableaux/Abbaye_Encadre_1.JPG';
import Abbaye_Encadre_2 from 'src/assets/image/touslestableaux/Abbaye_Encadre_2.JPG';
import Arbres_1 from 'src/assets/image/touslestableaux/Arbres_1.JPG';
import Arbres_2 from 'src/assets/image/touslestableaux/Arbres_2.JPG';
import Arbres_3 from 'src/assets/image/touslestableaux/Arbres_3.JPG';
import Arbres_4 from 'src/assets/image/touslestableaux/Arbres_4.JPG';
import Arbres_5 from 'src/assets/image/touslestableaux/Arbres_5.JPG';

// == Import
import './styles.scss';

// == Composant
const Art = () => (
  <div id="art">
    <h1>De l'aaaaaaaaaaaart</h1>
    <div className="photosList">
      <div className="vignette">
        <Link to="/art/Abbaye">
          <img src={Abbaye} alt="" />
        </Link>
      </div>
      <div className="vignette">
        <Link to="/art/Abbaye_Encadre_1">
          <img src={Abbaye_Encadre_1} alt="" />
        </Link>
      </div>
      <div className="vignette">
        <Link to="/art/Abbaye_Encadre_2">
          <img src={Abbaye_Encadre_2} alt="" />
        </Link>
      </div>
      <div className="vignette">
        <Link to="/art/Arbres_1">
          <img src={Arbres_1} alt="" />
        </Link>
      </div>
      <div className="vignette">
        <Link to="/art/Arbres_2">
          <img src={Arbres_2} alt="" />
        </Link>
      </div>
      <div className="vignette">
        <Link to="/art/Arbres_3">
          <img src={Arbres_3} alt="" />
        </Link>
      </div>
      <div className="vignette">
        <Link to="/art/Arbres_4">
          <img src={Arbres_4} alt="" />
        </Link>
      </div>
      <div className="vignette">
        <Link to="/art/Arbres_5">
          <img src={Arbres_5} alt="" />
        </Link>
      </div>
    </div>
  </div>
);

// == Export
export default Art;
