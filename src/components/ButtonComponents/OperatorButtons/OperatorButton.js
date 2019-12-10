import React from "react";

const OperatorButton = props => {
  return (
    <button>
      <span>{props.symbol.value}</span>
    </button>
  );
};

export default OperatorButton;