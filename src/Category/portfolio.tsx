import styled from "styled-components"
import { Contents } from "../components/content"

const ProductH2 = styled.h2`
  color: #c4eedeb7;
  font-size: 2rem;
`

export const Portfolio = () => {
  return(
    <>
      <Contents bgColor="#666666">
        <ProductH2>Product</ProductH2>
      </Contents>
    </>
  )
}
