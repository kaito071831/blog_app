import styled from "styled-components"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper, faBlog } from "@fortawesome/free-solid-svg-icons";

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

export const Footer = () => {
  return(
    <>
      <FooterStyle>
        <FooterLink>
          <Link href="https://github.com/kaito071831">
            <FontAwesomeIcon
              icon={faGithub}
              className="icon"
              title="GitHub"
            />
          </Link>
          <Link href="https://qiita.com/kaito071831">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="icon"
              title="Qiita"
            />
          </Link>
          <Link href="https://twitter.com/kaito071831">
            <FontAwesomeIcon
              icon={faTwitter}
              color="#00acee"
              className="icon"
              title="Twitter"
            />
          </Link>
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
