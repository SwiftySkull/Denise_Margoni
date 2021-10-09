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
    <div className={menu ? 'blurArea' : 'hiddenBlur'} onClick={displayMenu} />
    <h1>Denise Margoni</h1>
    <nav className="bigMenu">
      <NavLink activeClassName="active" to="/index">Accueil</NavLink>
      <NavLink activeClassName="active" to="/art">Art</NavLink>
      <NavLink activeClassName="active" to="/vie">Vie</NavLink>
      <NavLink activeClassName="active" to="/actualite">Actualité</NavLink>
      <NavLink activeClassName="active" to="/contact">Contact</NavLink>
    </nav>
    <nav className={menu ? 'openMenu smallMenu' : 'hideMenu smallMenu'}>
      <NavLink activeClassName="active" className="scrollMenu" to="/index">Accueil</NavLink>
      <NavLink activeClassName="active" className="scrollMenu" to="/art">Art</NavLink>
      <NavLink activeClassName="active" className="scrollMenu" to="/vie">Vie</NavLink>
      <NavLink activeClassName="active" className="scrollMenu" to="/actualite">Actualité</NavLink>
      <NavLink activeClassName="active" className="scrollMenu" to="/contact">Contact</NavLink>
      <div className="extendBar" onClick={displayMenu}>
        +
      </div>
    </nav>
    <div className="extendBar" onClick={displayMenu}>
      +
    </div>
  </div>
);

Header.propTypes = {
  displayMenu: PropTypes.func.isRequired,
  menu: PropTypes.bool.isRequired,
};

// == Export
export default Header;
