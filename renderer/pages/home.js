import useSWR from 'swr'
import { v4 as uuidv4 } from 'uuid'
import { internalApiPaths, buttons } from '../constants'
import fetcher from '../utils/api'
import getDifferenceByMinutes from '../utils/dates'

function Home() {
  const { data } = useSWR(internalApiPaths.FETCH_TWEETS, fetcher)

  if (!data) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p>Loading...</p>
      </div>
    )
  }
  if (data.errors) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p>{`ERROR: ${data.errors && data.errors.length ? data.errors[0].message : ''}`}</p>
      </div>
    )
  }
  return data.map(tweet => (
    <div className="px-4 py-3 border-b border-twitterGray" key={tweet.id}>
      <div className="flex">
        <img className="w-10 h-10 mr-3 rounded-full" src={tweet.user.profile_image_url_https} alt="avatar" />
        <div className="flex flex-col flex-1 text-sm">
          <p className="mb-1 text-twitterGray">
            <span className="font-bold text-white">{tweet.user.name}</span>
            <span className="pl-1">{`@${tweet.user.screen_name}`}</span>
            <span className="ml-2 ">{`${getDifferenceByMinutes(tweet.created_at)} min`}</span>
          </p>
          <p>{tweet.text}</p>
          <div className="flex justify-between mt-3 text-twitterGray">
            {buttons.map(button => (
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 transition-colors duration-300 cursor-pointer fill-current hover:text-twitterBlue"
                key={uuidv4()}
              >
                {button}
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Latest Tweets',
    },
  }
}

export default Home
