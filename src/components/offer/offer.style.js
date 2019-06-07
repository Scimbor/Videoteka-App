import styled, { css } from "styled-components";
import { Colors } from "../../../src/shared/Colors";
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined";

const { white: defaultTextColor } = Colors;

const OfferWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 35px 0;
  background-color: #f4f5f5;
`;

const OfferBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 200px;
  width: 300px;
  color: ${defaultTextColor};
  margin: 25px 0;
  padding-left: 36px;
  font-weight: 500;
  font-size: 30px;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;

  &:after {
    position: absolute;
    content: " ";
    width: 45px;
    height: 45px;
    right: 0;
    top: 0;
    border-bottom: 45px solid;
    border-right: 45px solid #f4f5f5;

    ${props =>
      props.colorCorner &&
      css`
        border-bottom-color: ${props.colorCorner};
      `}
  }

  ${props =>
    props.colorBackground &&
    css`
      background-color: ${props.colorBackground};
    `}
`;

const ReadMoreArrow = styled(ArrowForwardIosOutlined)`
  && {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 50px;
    width: 20%;
  }
`;

const OfferDescription = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 0.8em;
    opacity: 0;
    z-index: -4;
  transition: all 0.3s ease 0s;

  ${props =>
    props.colorBackground &&
    css`
      background-color: ${props.colorBackground};
    `}

    ${props =>
      props.clicked === props.print &&
      css`
        opacity: 1;
        z-index: 3;
      `}
    ${props =>
      props.clicked === props.xsero &&
      css`
        opacity: 1;
        z-index: 3;
      `}
      ${props =>
        props.clicked === props.bind &&
        css`
          opacity: 1;
          z-index: 3;
        `}
        ${props =>
          props.clicked === props.scan &&
          css`
            opacity: 1;
            z-index: 3;
          `}
`;

const OfferList = styled.li``;

export {
  OfferWrapper,
  OfferBox,
  ReadMoreArrow,
  OfferDescription,
  OfferList
};
