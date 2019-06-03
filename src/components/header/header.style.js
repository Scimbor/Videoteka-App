import styled from "styled-components";

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
    color: #413f44;
    font-size: 8vw;
    letter-spacing: -2px;
    text-transform: uppercase;
    margin-top: -4vw;
    &:last-child{
      color: #45c8de;
    }
`

export { HeaderWrapper, TitleWrapper, TitleSpan };
