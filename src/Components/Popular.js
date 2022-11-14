import React from 'react';
import PopularCSS from "./popular.module.css";

function Popular() {
  return (
    
    <div className={PopularCSS.card}>
        <div className={PopularCSS.parent}>
          <div className={PopularCSS.glass}>
            <h1 className={PopularCSS.title}>Popular Schools</h1> 
            
          </div>
        </div>
    </div>
  )
}

export default Popular