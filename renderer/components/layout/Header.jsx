import PropTypes from 'prop-types'
import { TWITTER_USERNAME } from '../../constants/api'

function Header({ title }) {
  return (
    <header className="flex items-center px-4 py-3 border-b border-twitterGray">
      <img className="w-10 h-10 rounded-full" src={`http://twivatar.glitch.me/${TWITTER_USERNAME}`} alt="profile" />
      <p className="text-lg font-bold ml-7">{title}</p>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
