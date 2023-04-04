import styled from "styled-components"
import { Contents } from "../components/content"

const TopP = styled.p`
  color: #ffffff;
`

const TopH1 = styled(TopP.withComponent('h1'))`
  font-size: 3rem;
  margin: 0;
  
`

const TopContent = styled.div`
  width: 100%;
`

export const Top = () => {
  return(
    <>
      <Contents bgColor="#000000">
        <TopContent><TopH1>Kaito071831</TopH1></TopContent>
        <TopContent><TopP>Web Developer</TopP></TopContent>
      </Contents>    
    </>
  )
}
