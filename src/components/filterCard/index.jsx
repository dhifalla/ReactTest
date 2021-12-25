import React from "react";
import css from "./_filterCard.module.scss";

const FilterCard = ({button, filter}) => {

  

  return <div className={css.filterCard}>

<div className="buttons">
            {
                button.map((cat, i)=>{
                    return <button type="button" onClick={a }>{cat}</button>
                })
            }
    
        </div>
  </div>;
};

export default FilterCard;
