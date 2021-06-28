import '../styles/globals.css';
import '../styles/footer.css';
import { EndePointeWrapper } from '../store/context';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EndePointeWrapper>
      <Component {...pageProps} />
    </EndePointeWrapper>
  )
}

export default MyApp