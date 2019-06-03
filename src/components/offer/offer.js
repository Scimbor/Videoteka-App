import React, { useState } from "react";
import {
  OfferWrapper,
  OfferBox,
  OfferButton,
  ReadMoreArrow,
  OfferDescription,
  OfferList
} from "./offer.style";

const Offer = () => {
  const [clicked, setClick] = useState(null)

  return (
    <OfferWrapper>
      <OfferBox colorBackground={"#fc4349"} colorCorner={"#d11016"} onMouseOver={() => setClick("print")}>
        Drukowanie <OfferButton>Czytaj Więcej</OfferButton> <ReadMoreArrow />
        <OfferDescription className="hoverStyle" colorBackground={"#fc4349"}  clicked={clicked} print={"print"}>
            <OfferList> Format A4 - A0 </OfferList>
            <OfferList> Drukowanie zdjęć </OfferList>
            <OfferList> Drukowanie plakatów </OfferList>
            <OfferList> Drukowanie planów CAD </OfferList>
        </OfferDescription>
      </OfferBox>
      <OfferBox colorBackground={"#8dbf41"} colorCorner={"#739d33"} onMouseOver={() => setClick("xsero")}>
        Ksero <OfferButton>Czytaj Więcej</OfferButton> <ReadMoreArrow />
        <OfferDescription className="hoverStyle" colorBackground={"#8dbf41"}  clicked={clicked} xsero={"xsero"}>
            <OfferList> Ksero A4 - A0 </OfferList>
            <OfferList> Kserowanie zdjęć </OfferList>
            <OfferList> Kserowanie planów CAD</OfferList>
        </OfferDescription>
      </OfferBox>
      <OfferBox colorBackground={"#3498db"} colorCorner={"#3387c0"} onMouseOver={() => setClick("bind")}>
        Bindowanie <OfferButton>Czytaj Więcej</OfferButton> <ReadMoreArrow />
        <OfferDescription className="hoverStyle" colorBackground={"#3498db"}  clicked={clicked} bind={"bind"}>
            <OfferList> Oprawa prac </OfferList>
            <OfferList> Bindowanie </OfferList>
            <OfferList> Laminowanie </OfferList>
        </OfferDescription>
      </OfferBox>
      <OfferBox colorBackground={"#7588a5"} colorCorner={"#4e5764"} onMouseOver={() => setClick("scan")}>
        Skanowanie <OfferButton>Czytaj Więcej</OfferButton> <ReadMoreArrow />
        <OfferDescription className="hoverStyle" colorBackground={"#7588a5"}  clicked={clicked} scan={"scan"}>
            <OfferList> Skanowanie wielkoformatowe </OfferList>
            <OfferList> Skanowanie małoformatowe </OfferList>
            <OfferList> Archiwizacja w plikach </OfferList>
        </OfferDescription>
      </OfferBox>
    </OfferWrapper>
  );
};

export default Offer;
