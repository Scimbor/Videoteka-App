import React, { useState } from "react";
import {
  OfferWrapper,
  OfferBox,
  ReadMoreArrow,
  OfferDescription,
  OfferList
} from "./offer.style";
import ButtonComponent from '../../shared/Button/Button'

const Offer = () => {
  const [clicked, setClick] = useState(null)

  return (
    <OfferWrapper>
      <OfferBox colorBackground={"#fc4349"} colorCorner={"#d11016"} onMouseOver={() => setClick("print")} onMouseOut={()=>setClick(null)}>
        Drukowanie <ButtonComponent ButtonOffer>Czytaj Więcej</ButtonComponent> <ReadMoreArrow />
        <OfferDescription className="hoverStyle" colorBackground={"#fc4349"}  clicked={clicked} print={"print"}>
            <OfferList> Format A4 - A0 </OfferList>
            <OfferList> Drukowanie zdjęć </OfferList>
            <OfferList> Drukowanie plakatów </OfferList>
            <OfferList> Drukowanie planów CAD </OfferList>
        </OfferDescription>
      </OfferBox>
      <OfferBox colorBackground={"#8dbf41"} colorCorner={"#739d33"} onMouseOver={() => setClick("xsero")} onMouseOut={()=>setClick(null)}>
        Ksero <ButtonComponent ButtonOffer>Czytaj Więcej</ButtonComponent> <ReadMoreArrow />
        <OfferDescription className="hoverStyle" colorBackground={"#8dbf41"}  clicked={clicked} xsero={"xsero"}>
            <OfferList> Ksero A4 - A0 </OfferList>
            <OfferList> Kserowanie zdjęć </OfferList>
            <OfferList> Kserowanie planów CAD</OfferList>
        </OfferDescription>
      </OfferBox>
      <OfferBox colorBackground={"#3498db"} colorCorner={"#3387c0"} onMouseOver={() => setClick("bind")} onMouseOut={()=>setClick(null)}>
        Bindowanie <ButtonComponent ButtonOffer>Czytaj Więcej</ButtonComponent> <ReadMoreArrow />
        <OfferDescription className="hoverStyle" colorBackground={"#3498db"}  clicked={clicked} bind={"bind"}>
            <OfferList> Oprawa prac </OfferList>
            <OfferList> Bindowanie </OfferList>
            <OfferList> Laminowanie </OfferList>
        </OfferDescription>
      </OfferBox>
      <OfferBox colorBackground={"#7588a5"} colorCorner={"#4e5764"} onMouseOver={() => setClick("scan")} onMouseOut={()=>setClick(null)}>
        Skanowanie <ButtonComponent ButtonOffer>Czytaj Więcej</ButtonComponent> <ReadMoreArrow />
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
