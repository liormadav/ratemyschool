import React from 'react';
import PopularCSS from "./popular.module.css";
import PopularCard from "./PopularCard";

// images
import schoolimage from '../assets/schoolimage.jpeg';

function Popular() {
  return (
    
    <div className={PopularCSS.card}>
        <div className={PopularCSS.parent}>
          <div className={PopularCSS.glass}>
            <h1 className={PopularCSS.title}>Popular Schools</h1> 
           
            <div className={PopularCSS.cardContainer}>
            <div className= {PopularCSS.school}>
            <PopularCard
            schoolImage = {schoolimage}
            schoolName="Ron Arad" 
            schoolLocation="Rehovot" 
            reviews="4"
            />
            </div>

            <div className= {PopularCSS.school}>
            <PopularCard
            schoolImage = {schoolimage}
            schoolName="Ron Arad" 
            schoolLocation="Rehovot" 
            reviews="4"
            />
            </div>

            <div className= {PopularCSS.school}>
            <PopularCard
            schoolImage = {schoolimage}
            schoolName="Ron Arad" 
            schoolLocation="Rehovot" 
            reviews="4"
            />
            </div>

            <div className= {PopularCSS.school}>
            <PopularCard
            schoolImage = {schoolimage}
            schoolName="Ron Arad" 
            schoolLocation="Rehovot" 
            reviews="4"
            />
            </div>

            <div className= {PopularCSS.school}>
            <PopularCard
            schoolImage = {schoolimage}
            schoolName="Ron Arad" 
            schoolLocation="Rehovot" 
            reviews="4"
            />
            </div>

            <div className= {PopularCSS.school}>
            <PopularCard
            schoolImage = {schoolimage}
            schoolName="Ron Arad" 
            schoolLocation="Rehovot" 
            reviews="4"
            />
            </div>


        </div>
    </div>
    </div>
    </div>
  )
}

export default Popular