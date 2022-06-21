import Link from "next/link"
import styled from "styled-components"

const HeaderStyle = styled.header`
  padding: 30px 4% 10px;
  top: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
`

const HeaderTitle = styled.h1`
  margin: 0; padding: 0;
  font-size: 20px;
` 

const HeaderUl = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
`

const HeaderLi = styled.li`
  margin: 0 0 0 15px;
  font-size: 14px;
`

const HeaderNav = styled.nav`
  margin: 0 0 0 auto;
`

export const Header = () => {
  return(
    <HeaderStyle>
      <Link href="/">
        <HeaderTitle>EXAMSYSTEM</HeaderTitle>
      </Link>
      <HeaderNav>
        <HeaderUl>
          <Link href="#"><HeaderLi>Sign Up</HeaderLi></Link>
          <Link href="#"><HeaderLi>Login</HeaderLi></Link>
        </HeaderUl>
      </HeaderNav>
    </HeaderStyle>
  )
}
