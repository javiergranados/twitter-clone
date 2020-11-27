import PropTypes from 'prop-types'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <div className="flex flex-col w-screen h-screen text-light bg-twitterBlue">
        <div className="relative flex flex-col flex-1 w-full overflow-hidden">
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
