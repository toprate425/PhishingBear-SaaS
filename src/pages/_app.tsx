import React, { useState } from 'react'
import '../styles/app.scss'
import type { AppProps } from 'next/app'
import PropTypes from 'prop-types'

import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react';
import store from '../../redux/store'

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  const [state, setState] = useState(false)
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
    require('@fortawesome/fontawesome-free/js/all.js')
    setState(true)
  }, []);

  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          {state ?
            <Component {...pageProps} />
            : null}
        </Provider>
      </SessionProvider>
    </>
  )
}
MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.shape({}),
}

export default MyApp
