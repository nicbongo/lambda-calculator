import React from "react";

 const NumberButton = props => {
  return (
    <button className="number_button">
      <span>{props.number}</span>    
    </button>
  );
};

export default NumberButton;
