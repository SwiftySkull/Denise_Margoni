// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import loupe from 'src/assets/loupe.png';
// == Import
import './styles.scss';

// == Composant
const Art = ({
  paintingList,
  typingSearch,
  typedSearch,
  // searchPaintings,
  loadingPaintingList,
}) => {
  const xxx = 'xxx';
  // useEffect(() => {
  //   console.log('chargement des peintures en cours');
  //   loadingPaintingList();
  // }, []);

  return (
    <div id="art">
      <div className="searchArea">
        <input
          type="text"
          name="paintingSearch"
          id="paintingSearch"
          className="paintingSearch"
          placeholder="Recherche d'une peinture..."
          value={typedSearch}
          onChange={(evt) => typingSearch('typedSearch', evt.target.value)}
        />
        {/* <img src={loupe} alt="" className="loupe" onClick={searchPaintings} /> */}
        <img src={loupe} alt="" className="loupe" />
      </div>
      <div className="photosList">
        {paintingList.map((paint) => (
          <div className="vignette" key={paint.srcTitle}>
            <Link to={`/painting/${paint.srcTitle}`}>
              <img src={paint.src} alt={`${paint.title} peint en ${paint.date}`} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

Art.propTypes = {
  paintingList: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      srcTitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      infos: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  typingSearch: PropTypes.func.isRequired,
  typedSearch: PropTypes.string.isRequired,
  // searchPaintings: PropTypes.func.isRequired,
  loadingPaintingList: PropTypes.func.isRequired,
};

// == Export
export default Art;
