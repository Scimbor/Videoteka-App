import React from "react";
import { ContactWrapper, InfoBox, TelBox, Phone, Email, Courier } from "./contact.style";

const Contact = () => {
  return (
    <ContactWrapper>
      <InfoBox>
        <Phone />
        <TelBox>Kontakt <br /> Godziny 8:00 - 18.30</TelBox>
      </InfoBox>
      <InfoBox>
        <Email />
        <TelBox>E-mail wideomaniak@wp.pl</TelBox>
      </InfoBox>
      <InfoBox>
        <Courier />
        <TelBox>Darmowa dostawa dla zamówien powyżej 100 zł</TelBox>
      </InfoBox>
    </ContactWrapper>
  );
};

export default Contact;
