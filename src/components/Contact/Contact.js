import React from "react";
import { DivContainerContact, DivIcons } from "./style";
import mail from "./../../assets/images/mail.png";
import git from "./../../assets/images/github.png";
import linkedin from "./../../assets/images/in.png";

function Contact() {
  return (
    <DivContainerContact>
      <h2>Entre em Contato</h2>
      <DivIcons>
        <a href="mailto:lincoln20012@outlook.com" target="_blank">
          <img src={mail} alt="Mail Icon" />
        </a>
        <a href="" target="_blank">
          <img src={git} alt="Github Icon" />
        </a>
        <a href="" target="_blank">
          <img src={linkedin} alt="Linkedin Icon" />
        </a>
      </DivIcons>
    </DivContainerContact>
  );
}

export default Contact;
