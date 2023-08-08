// import style from "../LandingPage/LandingPage.module.css";
// import { Link } from "react-router-dom";
// import React from "react";

// const LandingPage = () => {
//   return (
//     <div className={`${style.landing} ${style["full-screen-bg"]}`}>
//       <div className={style.container_button}>
//         <Link to="/home">
//           <a className={style.a} href="#">
//             <span>START GAME</span>
//             <i></i>
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default LandingPage;

import style from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";
import React from "react";

const LandingPage = () => {
  return (
    <div className={`${style.landing} ${style["full-screen-bg"]}`}>
      <div className={style.container_button}>
        <Link to="/home" className={style.a}>
          <span>START GAME</span>
          <i></i>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
