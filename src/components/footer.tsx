import styled from "styled-components"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper, faBlog } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const FooterStyle = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #cab64a;
  padding: 0.5rem;
`

const FooterLink = styled.div`
  display: flex;
  align-items: strech;
  justify-content: center;
  margin-bottom: 1rem;
`

type FooterItem = {
  url: string;
  icon: IconProp;
  title: string;
  color?: string; 
}

const FooterItems: FooterItem[] = [
  {
    url: "https://github.com/kaito071831",
    icon: faGithub,
    title: "GitHub",
  },
  {
    url: "https://qiita.com/kaito071831",
    icon: faNewspaper,
    title: "Qiita",
  },
  {
    url: "https://twitter.com/kaito071831",
    icon: faTwitter,
    title: "Twitter",
    color: "#00acee",
  },
]

export const Footer = () => {
  return(
    <>
      <FooterStyle>
        <FooterLink>
          {FooterItems.map((item: FooterItem, index: number) => (
            <Link href={item.url} key={index} passHref>
              <a target="_blank">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="icon"
                  title={item.title}
                  color={item.color}
                />
              </a>
            </Link>
          ))}
          <Link href="/blog">
            <FontAwesomeIcon
              icon={faBlog}
              className="icon"
              title="Blog"
            />
          </Link>
        </FooterLink>
        <div>&copy;kaito071831 2022</div>
      </FooterStyle>
    </>
  )
}
