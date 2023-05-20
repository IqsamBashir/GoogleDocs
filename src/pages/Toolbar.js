import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";

const Toolbar = () => {
  const handleButtonClick = (format) => {
    // Implement your logic here for applying the specified format
    console.log(`Applying ${format}`);
  };

  return (
    <div className="toolbar text-center">
      <button onClick={() => handleButtonClick("bold")}>
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button onClick={() => handleButtonClick("italic")}>
        <FontAwesomeIcon icon={faItalic} />
      </button>
      <button onClick={() => handleButtonClick("underline")}>
        <FontAwesomeIcon icon={faUnderline} />
      </button>
      <button onClick={() => handleButtonClick("strikethrough")}>
        <FontAwesomeIcon icon={faStrikethrough} />
      </button>
      <button onClick={() => handleButtonClick("align-left")}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>
      <button onClick={() => handleButtonClick("align-center")}>
        <FontAwesomeIcon icon={faAlignCenter} />
      </button>
      <button onClick={() => handleButtonClick("align-right")}>
        <FontAwesomeIcon icon={faAlignRight} />
      </button>
    </div>
  );
};

export default Toolbar;
