import '../styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import 'swiper/css/bundle';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element =>  {
  useEffect(() => {
    const jssStyles: Element | null =
    document.querySelector("#jss-server-side");
    if (jssStyles) {
    jssStyles.parentElement?.removeChild(jssStyles);
    }
    }, []);

  return(
    <Component {...pageProps} />
  )
}

export default App
