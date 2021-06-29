import '../styles/globals.css';
import '../styles/footer.css';
import { BlogWrapper } from '../store/blog_context';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogWrapper>
      <Component {...pageProps} />
    </BlogWrapper>
  )
}

export default MyApp