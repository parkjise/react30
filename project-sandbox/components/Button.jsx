import React from "react";

export default function Button({ classes, text, icon, onClick }) {
  return (
    <button className={`btn btn-${classes}`} onClick={onClick}>
      {icon}
      {!text ? "Button" : text}
    </button>
  );
}
