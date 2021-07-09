import React from "react";
import "./ExpandInfoButton.css";
import {useState} from 'react';

function ExpandInfoButton(props) {
  const [show, setShow] = useState(props.showInfo);

  const updateShow = () => {
    props.handleClick()
    setShow(!show);
  };

  return (
    <button
      className={show ? "button-info-clicked" : "button-info"}
      onClick={updateShow}
    >
      Show {show ? "Less" : "More"}
    </button>
  );
}

export default ExpandInfoButton;
