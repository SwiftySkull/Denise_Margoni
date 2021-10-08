// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Header = () => (
  <div id="header">
    <h1>Denise Margoni</h1>
    <nav>
      <NavLink activeClassName="active" to="/index">Accueil</NavLink>
      <NavLink activeClassName="active" to="/art">Art</NavLink>
      <NavLink activeClassName="active" to="/vie">Vie</NavLink>
      <NavLink activeClassName="active" to="/actualite">Actualité</NavLink>
      <NavLink activeClassName="active" to="/contact">Contact</NavLink>
    </nav>
  </div>
);

// == Export
export default Header;
