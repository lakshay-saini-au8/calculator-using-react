import React from "react";
import "../css/CalcButton.css";
const CalcButton = ({ getValue, text }) => {
  const passValue = (event) => {
    getValue(event.target.innerText);
  };
  return (
    <div className="CalcButton">
      <div className="CalcButton__text">
        <p onClick={passValue}> {text}</p>
      </div>
    </div>
  );
};

export default CalcButton;
