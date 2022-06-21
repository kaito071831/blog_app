import { ReactNode } from "react";
import styled from "styled-components";


type Props = {
  bgColor: string;
  children: ReactNode;
}

const ContentLayout = styled.div`
  background-color: ${(props: Props) => props.bgColor};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`

export const Contents = (props: Props) => {
  return(
    <>
      <ContentLayout bgColor={props.bgColor}>
        {props.children}
      </ContentLayout>
    </>
  )
}
