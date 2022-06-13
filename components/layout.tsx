import Head from "next/head"
import { ReactNode } from "react"
import { Header } from './header'
import { Footer } from './footer'
import styled from "styled-components"

type layoutProps = {
  title: string
  children: ReactNode
}

const BaseLayout = styled.main`
  background-color: #7aae6a;
  display: block;
  height: 85vh;
`

export const Layout = (props: layoutProps) => {
  return(
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header/>
      <BaseLayout>
        {props.children}
      </BaseLayout>
      <Footer/>
    </>
  )
}
