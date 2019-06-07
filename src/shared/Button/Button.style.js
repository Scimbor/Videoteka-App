import styled, { css } from "styled-components";
import { Colors } from "../../../src/shared/Colors";

const { black600: ButtonBackground, white: defaultTextColor } = Colors;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  height: 50px;
  overflow: hidden;
  font-size: 20px;
  line-height: 50px;
  text-transform: uppercase;
  font-weight: 300;
  padding: 0 65px;

  ${props =>
    props.ButtonOffer &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${ButtonBackground};
      color: ${defaultTextColor};
      z-index: 2;
    `}
`;

export { Button };
