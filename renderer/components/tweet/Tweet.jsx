import PropTypes from 'prop-types'
import Title from './Title'
import Body from './Body'
import ButtonPanel from './ButtonPanel'

function Tweet({ tweet }) {
  return (
    <div className="px-4 py-3 border-b border-twitterGray">
      <div className="flex">
        <img className="w-10 h-10 mr-3 rounded-full" src={tweet.user.profile_image_url_https} alt="avatar" />
        <div className="flex flex-col flex-1 text-sm">
          <Title user={tweet.user} date={tweet.created_at} />
          <Body text={tweet.text} />
          <ButtonPanel />
        </div>
      </div>
    </div>
  )
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.shape({
      profile_image_url_https: PropTypes.string.isRequired,
    }),
    created_at: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
}

export default Tweet
