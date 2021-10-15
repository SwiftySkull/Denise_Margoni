// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import { paintingList } from 'src/data';

// import Abbaye from 'src/assets/image/touslestableaux/Abbaye.JPG';
// import Abbaye_Encadre_1 from 'src/assets/image/touslestableaux/Abbaye_Encadre_1.JPG';
// import Abbaye_Encadre_2 from 'src/assets/image/touslestableaux/Abbaye_Encadre_2.JPG';
// import Arbres_1 from 'src/assets/image/touslestableaux/Arbres_1.JPG';
// import Arbres_2 from 'src/assets/image/touslestableaux/Arbres_2.JPG';
// import Arbres_3 from 'src/assets/image/touslestableaux/Arbres_3.JPG';
// import Arbres_4 from 'src/assets/image/touslestableaux/Arbres_4.JPG';
// import Arbres_5 from 'src/assets/image/touslestableaux/Arbres_5.JPG';

// == Import
import './styles.scss';

const Art = () => (
  <div id="art">
    <h1>De l'aaaaaaaaaaaart</h1>
    <div className="photosList">
      {paintingList.map((paint) => (
        <div className="vignette">
          <Link to={`/painting/${paint.srcTitle}`}>
            <img src={paint.src} alt="" />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

// == Composant
// const Art = () => (
//   <div id="art">
//     <h1>De l'aaaaaaaaaaaart</h1>
//     <div className="photosList">
//       {paintingList.map((paint) => (
//         <div className="vignette">
//           <Link to={`/painting/${paint.title}`}>
//             <img src={paint.src} alt="" />
//           </Link>
//         </div>
//       ))}
//       {/* <div className="vignette">
//         <Link to="/painting/Abbaye">
//           <img src={paintingList.Abbaye.src} alt="" />
//         </Link>
//       </div>
//       <div className="vignette">
//         <Link to="/painting/Abbaye_Encadre_1">
//           <img src={paintingList.Abbaye_Encadre_1.src} alt="" />
//         </Link>
//       </div>
//       <div className="vignette">
//         <Link to="/painting/Abbaye_Encadre_2">
//           <img src={paintingList.Abbaye_Encadre_2.src} alt="" />
//         </Link>
//       </div>
//       <div className="vignette">
//         <Link to="/painting/Arbres_1">
//           <img src={paintingList.Arbres_1.src} alt="" />
//         </Link>
//       </div>
//       <div className="vignette">
//         <Link to="/painting/Arbres_2">
//           <img src={paintingList.Arbres_2.src} alt="" />
//         </Link>
//       </div>
//       <div className="vignette">
//         <Link to="/painting/Arbres_3">
//           <img src={paintingList.Arbres_3.src} alt="" />
//         </Link>
//       </div>
//       <div className="vignette">
//         <Link to="/painting/Arbres_4">
//           <img src={paintingList.Arbres_4.src} alt="" />
//         </Link>
//       </div>
//       <div className="vignette">
//         <Link to="/painting/Arbres_5">
//           <img src={paintingList.Arbres_5.src} alt="" />
//         </Link>
//       </div> */}
//     </div>
//   </div>
// );

// == Export
export default Art;
