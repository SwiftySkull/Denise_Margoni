// == Import npm
import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import { paintingList } from 'src/data';

// == Import
import './styles.scss';

// == Composant
const UniqueArt = ({
  moreDetails,
  openDetails,
  changePaintingSize,
  paintingSize,
  previousToList,
}) => {
  const { paintingName } = useParams();

  const actuelPainting = paintingList.find((painting) => painting.srcTitle == paintingName);

  return (
    <div id="uniqueArt">
      <div className="pictureBorder">
        <img
          src={actuelPainting.src}
          alt=""
          onClick={changePaintingSize}
        />
      </div>
      <div className="details">
        <p className="title">{actuelPainting.title}</p>
        <p className="date">{actuelPainting.date}</p>
        <p className="type">{actuelPainting.type}</p>
        <p className="size">{actuelPainting.size}</p>
        {actuelPainting.infos !== '' && actuelPainting.infos !== null
        && (
          <div>
            <p className="moreDetails" onClick={openDetails}>Informations complémentaires <span>+</span></p>
            <p className={moreDetails ? 'showInfos' : 'hideInfos'}>{actuelPainting.infos}</p>
          </div>
        )}
      </div>
      <div
        className="closePicture"
        onClick={previousToList}
      ><p>+</p>
      </div>
      <div className={paintingSize ? 'bigPainting' : 'smallPainting'} onClick={changePaintingSize}>
        <img
          src={actuelPainting.src}
          alt=""
        />
      </div>
    </div>
  );
};

UniqueArt.propTypes = {
  moreDetails: PropTypes.bool.isRequired,
  openDetails: PropTypes.func.isRequired,
  changePaintingSize: PropTypes.func.isRequired,
  paintingSize: PropTypes.bool.isRequired,
  previousToList: PropTypes.func.isRequired,
};

// == Export
export default UniqueArt;
