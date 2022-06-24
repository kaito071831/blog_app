import { Html, Main, NextScript, Head } from "next/document";

const Document = () => {
  return(
    <Html lang="ja">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Rubik+Moonrocks&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
