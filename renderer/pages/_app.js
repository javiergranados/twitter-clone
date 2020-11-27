import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* eslint-disable-next-line */}
        <Component {...pageProps} />
    </Layout>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
}

export default MyApp
