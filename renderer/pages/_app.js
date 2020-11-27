import PropTypes from 'prop-types'
import Head from 'next/head'
import Layout from '../components/Layout'

import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <Layout title={pageProps.title}>
        {/* eslint-disable-next-line */}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
}

export default MyApp
