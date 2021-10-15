// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import { paintingList } from 'src/data';

// == Import
import './styles.scss';

// == Composant
const Art = () => (
  <div id="art">
    <h1>De l'aaaaaaaaaaaart</h1>
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

// == Export
export default Art;
