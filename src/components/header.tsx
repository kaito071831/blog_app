import Link from "next/link"
import styled from "styled-components"
import { sp } from "../styles/media"

const HeaderStyle = styled.header`
  padding: 2.5rem 4% 0.6rem;
  top: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  ${sp`
    display: block;
    text-align: center;
  `}
`

const HeaderTitle = styled.h1`
  margin: 0; padding: 0;
  font-size: 1.25rem;
  cursor: pointer;
` 

const HeaderUl = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  ${sp`
    display: none;
    padding: 0;
  `}
`

const HeaderLi = styled.li`
  margin: 0 0 0 1rem;
  font-size: 1rem;
  cursor: pointer;
`

const HeaderNav = styled.nav`
  margin: 0 0 0 auto;
`

export const Header = () => {
  return(
    <>
      <HeaderStyle>
        <Link href="/">
          <HeaderTitle>kaito071831</HeaderTitle>
        </Link>
        <HeaderNav>
          <HeaderUl>
            <Link href="https://twitter.com/kaito071831"><HeaderLi>Twitter</HeaderLi></Link>
            <Link href="https://qiita.com/kaito071831"><HeaderLi>Qiita</HeaderLi></Link>
            <Link href="https://github.com/kaito071831"><HeaderLi>GitHub</HeaderLi></Link>
            <Link href="/blog"><HeaderLi>BLOG</HeaderLi></Link>
          </HeaderUl>
        </HeaderNav>
      </HeaderStyle>
    </>
  )
}
