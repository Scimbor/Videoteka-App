import styled from "styled-components";
import { Colors } from "../../../src/shared/Colors";


const { blueLight100: ColorText2, black500: ColorText1 } = Colors;

const HeaderWrapper = styled.div`
  position: relative;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  padding: 0 60px;

  @media only screen and (max-width: 767px) {
    padding: 0 20px;
}
`;

const TitleSpan = styled.span`
    position: relative;
    display: block;
    color: ${ColorText1};
    font-size: 8vw;
    letter-spacing: -2px;
    text-transform: uppercase;
    margin-top: -4vw;
    &:last-child{
      color: ${ColorText2};
    }
`

export { HeaderWrapper, TitleWrapper, TitleSpan };
