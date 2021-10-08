// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import Facebook from 'src/assets/image/facebook_logo.webp';
import Instagram from 'src/assets/image/instagram_logo.webp';
import Wikipedia from 'src/assets/image/wikipedia_logo.png';
import './styles.scss';

// == Composant
const Footer = () => (
  <div id="footer">
    <div className="foot">
      <p>2021 Catalogue Denise Margoni</p>
      <div className="logo">
        <img src={Facebook} alt="Facebook logo" />
        <img src={Instagram} alt="Instagram logo" />
        <img src={Wikipedia} alt="Wikipedia logo" />
      </div>
      <div className="legals">
        <Link className="link" to="/newsletter">Newsletter</Link>
        {/* <Link className="link" to="/cgu">Conditions Générales d'utilisation</Link> */}
        <Link className="link" to="/politique">Politique de confidentialité</Link>
        <Link className="link" to="/copyright">Copyright</Link>
        <Link className="link" to="/credits">Crédits</Link>
      </div>
    </div>
  </div>
);

// == Export
export default Footer;
