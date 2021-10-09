// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Header = ({
  displayMenu,
  menu,
}) => (
  <div id="header">
    <h1>Denise Margoni</h1>
    <nav className="bigMenu">
      <NavLink activeClassName="active" to="/index">Accueil</NavLink>
      <NavLink activeClassName="active" to="/art">Art</NavLink>
      <NavLink activeClassName="active" to="/vie">Vie</NavLink>
      <NavLink activeClassName="active" to="/actualite">Actualité</NavLink>
      <NavLink activeClassName="active" to="/contact">Contact</NavLink>
    </nav>
    <div className="extendBar" onClick={displayMenu}>
      +
    </div>
    <div className={menu ? 'openMenu smallMenu' : 'hideMenu smallMenu'}>
      <nav>
        <NavLink activeClassName="active" to="/index">Accueil</NavLink>
        <NavLink activeClassName="active" to="/art">Art</NavLink>
        <NavLink activeClassName="active" to="/vie">Vie</NavLink>
        <NavLink activeClassName="active" to="/actualite">Actualité</NavLink>
        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
      </nav>
    </div>
  </div>
);

Header.propTypes = {
  displayMenu: PropTypes.func.isRequired,
  menu: PropTypes.bool.isRequired,
};

// == Export
export default Header;
