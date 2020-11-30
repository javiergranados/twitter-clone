import PropTypes from 'prop-types'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <Layout title={pageProps.title}>
        <SWRConfig
          value={{
            refreshInterval: 0,
            revalidateOnFocus: false,
          }}
        >
          {/* eslint-disable-next-line */}
        <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
}

export default MyApp
