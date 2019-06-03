import React from "react";
import { HeaderWrapper, TitleWrapper, TitleSpan } from "./header.style";
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  return (
    <HeaderWrapper>
      <Carousel controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://livedemo00.template-help.com/wt_50774/images/slide1.jpg?1559116605523`}
            alt="First slide"
          />
          <TitleWrapper>
            <TitleSpan>Profesjonalne</TitleSpan>
            <TitleSpan>drukowanie</TitleSpan>
          </TitleWrapper>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://livedemo00.template-help.com/wt_50774/images/slide2.jpg?1559116605787`}
            alt="Third slide"
          />
          <TitleWrapper>
            <TitleSpan>Najlepsza</TitleSpan>
            <TitleSpan>jakość</TitleSpan>
          </TitleWrapper>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://livedemo00.template-help.com/wt_50774/images/slide2.jpg?1559116605787`}
            alt="Third slide"
          />
          <TitleWrapper>
            <TitleSpan>Najnowsza</TitleSpan>
            <TitleSpan>technologia</TitleSpan>
          </TitleWrapper>
        </Carousel.Item>
      </Carousel>
    </HeaderWrapper>
  );
};

export default Header;
