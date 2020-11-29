import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

function Layout({ title, children }) {
  return (
    <>
      <div className="flex flex-col w-screen h-screen text-white bg-twitterDarkBlue">
        <div className="relative flex flex-col flex-1 w-full overflow-hidden">
          <Header title={title} />
          <main className="flex-1 overflow-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
