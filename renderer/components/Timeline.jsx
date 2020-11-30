import PropTypes from 'prop-types'
import Tweet from './tweet/Tweet'

function Timeline({ data }) {
  return data.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)
}

Timeline.propTypes = {
  data: PropTypes.shape({ errors: PropTypes.shape({}) }).isRequired,
}

export default Timeline
