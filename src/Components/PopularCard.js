import React from 'react';
import PopularCardCSS from "./popularCard.module.css";

function PopularCard(props) {
//  const { schoolImage } = props;

  return (
    <div className={PopularCardCSS.card}>
          <img src={props.schoolImage} alt="school" />
      <div className={PopularCardCSS.cardContent}>

            <h2 className={PopularCardCSS.schoolName}>{props.schoolName}</h2>

            <div className={PopularCardCSS.sub}>
              
            <p className={PopularCardCSS.schoolLocation}>
              {props.schoolLocation}
            </p>
            <p className={PopularCardCSS.reviews}>
              <span className={PopularCardCSS.rating}>{props.reviews} reviews</span>
            </p>

            </div>
      </div>
    </div>
  )
}

export default PopularCard