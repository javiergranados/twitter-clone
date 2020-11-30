import PropTypes from 'prop-types'
import getDifferenceByMinutes from '../../utils/dates'

function Title({ user, date }) {
  return (
    <p className="mb-1 text-twitterGray">
      <span className="font-bold text-white">{user.name}</span>
      <span className="pl-1">{`@${user.screen_name}`}</span>
      <span className="ml-2 ">{`${getDifferenceByMinutes(date)} min`}</span>
    </p>
  )
}

Title.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen_name: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
}

export default Title
