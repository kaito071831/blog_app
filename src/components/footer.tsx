import styled from "styled-components"
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import TwitterIcon from '@mui/icons-material/Twitter';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const FooterStyle = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #cab64a;
  padding: 0.5rem;
`

const FooterLink = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`

export const Footer = () => {
  return(
    <FooterStyle>
      <FooterLink>
        <Link href="https://github.com/kaito071831">
          <GitHubIcon
            fontSize="large"
            cursor="pointer"
            sx={{"&:hover":{color: "white"}}}
          />
        </Link>
        <Link href="https://twitter.com/kaito071831">
          <TwitterIcon
            fontSize="large"
            cursor="pointer"
            color="primary"
            sx={{
              marginLeft: 2,
              "&:hover":{color: "white"}
            }}
          />
        </Link>
        <Link href="/blog">
          <RssFeedIcon
            fontSize="large"
            cursor="pointer"
            sx={{
              marginLeft: 2,
              "&:hover":{color: "white"}
            }}
          />
        </Link>
      </FooterLink>
      <div>&copy;kaito071831 2022</div>
    </FooterStyle>
  )
}
