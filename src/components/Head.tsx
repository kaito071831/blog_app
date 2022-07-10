import Head from "next/head";

type Page = {
  title?: string;
}

const HP_TITLE = "kaito071831"
const DESCRIPTION = "kaito071831のHPです"
const HP_URL = "https://www.kaito071831.com/"

export const HeadParts = (props: Page) => {
  const title: string = props.title ? `${props.title} | ${HP_TITLE}` : HP_TITLE
  return(
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta property="og:url" content={HP_URL}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={DESCRIPTION}/>
      <meta property="og:site_name" content={HP_TITLE}/>
      <meta property="og:image" content={`${HP_URL}favicon.ico`}/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@kaito071831"/>
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:url" content={HP_URL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={`${HP_URL}favicon.ico`} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={HP_URL} />
      <link rel="apple-touch-icon" href={"/favicon.ico"} />
    </Head>
  )
}
