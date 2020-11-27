import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { selectedIcons, icons } from '../constants'

function Layout({ title, children }) {
  const router = useRouter()

  const renderIcon = name => {
    const selected = router.pathname === name
    return (
      <Link href={name}>
        <a className="flex items-center justify-center w-1/4 py-3 cursor-default">
          <svg
            viewBox="0 0 24 24"
            className={`cursor-pointer fill-current text-twitter${
              (selected && 'Blue') || 'Gray'
            } w-7 h-7 hover:text-twitterBlue`}
          >
            {(selected && selectedIcons[name]) || icons[name]}
          </svg>
        </a>
      </Link>
    )
  }

  return (
    <>
      <div className="flex flex-col w-screen h-screen text-white bg-twitterDarkBlue">
        <div className="relative flex flex-col flex-1 w-full overflow-hidden">
          <header className="flex items-center px-4 py-3 border-b border-twitterGray">
            <img className="w-10 h-10 rounded-full" src="http://twivatar.glitch.me/jvgranados_" alt="profile" />
            <p className="text-lg font-bold ml-7">{title}</p>
          </header>
          <main className="flex-1 overflow-auto">{children}</main>
          <footer className="flex border-t border-twitterGray">
            {renderIcon('/home')}
            {renderIcon('/search')}
            {renderIcon('/notifications')}
            {renderIcon('/messages')}
          </footer>
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
