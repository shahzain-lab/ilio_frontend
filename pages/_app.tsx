import type { AppProps } from 'next/app'
// styles
import { GlobalStyle } from '../styles/globals.styles'
// native components
import Navbar from '../layout/Navbar'
// redux
import { store } from '../state/store/store';
import { Provider } from 'react-redux'
import AppHead from '../layout/Head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
  <AppHead title='Home Page' />
  <GlobalStyle />
  <Navbar />
  <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
