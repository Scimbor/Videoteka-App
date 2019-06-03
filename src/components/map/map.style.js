import styled from "styled-components";

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #45c8de;
  padding: 25px 25px;
`;

const DeveloperTitle = styled.h2`
    color:white;
    font-size: 30px;
    width: 100%;
`

const Link = styled.a`
    color:white;
    font-size: 20px;
     &:hover{
         color: white;
         text-decoration: none;
     }
`

export { SocialWrapper, Link, DeveloperTitle };
