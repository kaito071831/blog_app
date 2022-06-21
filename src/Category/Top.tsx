import styled from "styled-components"
import { Contents } from "../components/content"

const TopFont = styled.p`
  color: #ffffff;
`

const TopTitle = styled(TopFont.withComponent('h1'))`
  font-size: 3rem;
  margin: 0;
  
`

const TopContent = styled.div`
  width: 100%;
`

export const Top = () => {
  return(
    <Contents bgColor="#000000">
      <TopContent><TopTitle>Kaito071831</TopTitle></TopContent>
      <TopContent><TopFont>Web Server Side Engineer</TopFont></TopContent>
    </Contents>
  )
}
