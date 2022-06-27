
import { ReactNode } from "react"
import { Header } from './header'
import { Footer } from './footer'
import styled from "styled-components"
import { HeadParts } from "./Head"

type layoutProps = {
  title: string
  children: ReactNode
}

const BaseLayout = styled.main`
  background-color: #7aae6a;
  display: block;
  text-align: center;
`

export const Layout = (props: layoutProps) => {
  return(
    <>
      <HeadParts title={props.title}/>
      <Header/>
      <BaseLayout>
        {props.children}
      </BaseLayout>
      <Footer/>
    </>
  )
}
