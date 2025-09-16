import React from "react";


const Button = ({ text, className = "", onClick, type = "button" }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
