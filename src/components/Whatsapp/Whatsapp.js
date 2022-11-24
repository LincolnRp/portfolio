import React from "react";
import wpp from "./../../assets/images/whatsapp.png";
import { DivContainerWpp } from "./style";

function Whatsapp() {
  return (
    <DivContainerWpp>
      <a
        href="https://web.whatsapp.com/send?phone=5532999547425"
        target="_blank"
      >
        <img src={wpp} alt="whatsapp icon"></img>
      </a>
    </DivContainerWpp>
  );
}

export default Whatsapp;
