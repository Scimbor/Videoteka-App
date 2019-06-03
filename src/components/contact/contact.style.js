import styled from "styled-components";
import LocalPhoneOutlined from "@material-ui/icons/LocalPhoneOutlined";
import AlternateEmailOutlined from "@material-ui/icons/AlternateEmailOutlined";
import DirectionsTransitOutlined from "@material-ui/icons/DirectionsTransitOutlined";
import { Colors } from "../../../src/shared/Colors";

const { white: defaultTextColor, redLight200: iconsColor, grayLight400: backgroundContact } = Colors;

const ContactWrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 35px 0;
  width: 100%;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 350px;
  height: 120px;
  background-color: ${backgroundContact};
  padding: 0 20px;
  margin: 15px 0;
`;

const TelBox = styled.h2`
  font-size: 1.5em;
  color: ${defaultTextColor};
  font-weight: 300;
  text-transform: uppercase;
`;

const Phone = styled(LocalPhoneOutlined)`
  && {
    color: ${iconsColor};
    font-size: 4.5em;
    padding-right: 15px;
  }
`;

const Email = styled(AlternateEmailOutlined)`
  && {
    color: ${iconsColor};
    font-size: 4.5em;
    padding-right: 15px;
  }
`;

const Courier = styled(DirectionsTransitOutlined)`
  && {
    color: ${iconsColor};
    font-size: 4.5em;
    padding-right: 15px;
  }
`;

export { ContactWrapper, InfoBox, TelBox, Phone, Email, Courier };
