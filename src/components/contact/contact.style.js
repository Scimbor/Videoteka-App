import styled from "styled-components";
import LocalPhoneOutlined from "@material-ui/icons/LocalPhoneOutlined";
import AlternateEmailOutlined from "@material-ui/icons/AlternateEmailOutlined"
import DirectionsTransitOutlined from "@material-ui/icons/DirectionsTransitOutlined"


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
  background-color: #d3d3d3;
  padding: 0 20px;
  margin: 15px 0;
`;

const TelBox = styled.h2`
      font-size: 1.5em;
  color: #fff;
  font-weight: 300;
  text-transform: uppercase;
`;

const Phone = styled(LocalPhoneOutlined)`
  && {
    color: #fc4349;
    font-size: 4.5em;
    padding-right: 15px;
  }
`;

const Email = styled(AlternateEmailOutlined)`
  && {
    color: #fc4349;
    font-size: 4.5em;
    padding-right: 15px;
  }
`

const Courier = styled(DirectionsTransitOutlined)`
  && {
    color: #fc4349;
    font-size: 4.5em;
    padding-right: 15px;
  }
`

export { ContactWrapper, InfoBox, TelBox, Phone, Email, Courier };
