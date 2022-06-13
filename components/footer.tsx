import styled from "styled-components"

const FooterStyle = styled.footer`
  width: 100%;
  height: 5vh; 
  text-align: center;
  background-color: #cab64a;
`

export const Footer = () => {
  return(
    <FooterStyle>
      &copy;kaito071831
    </FooterStyle>
  )
}
