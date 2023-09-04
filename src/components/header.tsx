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
type HeaderItem = {
  url: string;
  title: string;
}

const HeaderItems: HeaderItem[] = [
  {
    url: "https://github.com/kaito071831",
    title: "GitHub"
  },
  {
    url: "https://qiita.com/kaito071831",
    title: "Qiita"
  },
  {
    url: "https://twitter.com/kaito071831",
    title: "X",
  },
]

export const Header = () => {
  return(
    <>
      <HeaderStyle>
        <Link href="/">
          <HeaderTitle>kaito071831</HeaderTitle>
        </Link>
        <HeaderNav>
          <HeaderUl>
            {HeaderItems.map((item: HeaderItem, index: number) => (
              <Link href={item.url} key={index}>
                <a target="_blank">
                  <HeaderLi>{item.title}</HeaderLi>
                </a>
              </Link>
            ))}
            <Link href="/blog"><HeaderLi>BLOG</HeaderLi></Link>
          </HeaderUl>
        </HeaderNav>
      </HeaderStyle>
    </>
  )
}
