import PropTypes from 'prop-types'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <div className="flex flex-col w-screen h-screen text-white bg-twitterDarkBlue">
        <div className="relative flex flex-col flex-1 w-full overflow-hidden">
          <header className="flex items-center px-4 py-3 border-b border-twitterGray">
            <img className="rounded-full w-10 h-10" src="http://twivatar.glitch.me/jvgranados_" alt="profile" />
            <p className="ml-7 text-lg font-bold">Latest Tweets</p>
          </header>
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
