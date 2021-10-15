// == Import npm
import React from 'react';
import { useParams } from 'react-router';

import { paintingList } from 'src/data';

// == Import
import './styles.scss';

// == Composant
const UniqueArt = () => {
  const { paintingName } = useParams();

  const actuelPainting = paintingList.find((painting) => painting.srcTitle == paintingName);

  return (
    <div className="uniqueArt">
      <figure>
        <img src={actuelPainting.src} alt="" />
        <figcaption>{actuelPainting.title} - {actuelPainting.taille}</figcaption>
      </figure>
    </div>
  );
};

// == Export
export default UniqueArt;
