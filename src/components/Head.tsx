import Head from "next/head";

type Page = {
  title?: string;
}

const HP_TITLE = "kaito071831"
const DESCRIPTION = "kaito071831のHPです"

export const HeadParts = (props: Page) => {
  const title: string = props.title ? `${props.title} | ${HP_TITLE}` : HP_TITLE
  return(
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta property="og:url" content={process.env.NEXT_PUBLIC_HP_URL}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={DESCRIPTION}/>
      <meta property="og:site_name" content={HP_TITLE}/>
      <meta property="og:image" content={`${process.env.HP_URL}/favicon.ico`}/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@kaito071831"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
