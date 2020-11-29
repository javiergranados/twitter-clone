import useSWR from 'swr'
import { internalApiPaths } from '../constants'
import fetcher from '../utils/api'

function Home() {
  const { data } = useSWR(internalApiPaths.FETCH_TWEETS, fetcher)
  console.log('data', data)

  return (
    <div className="flex items-center justify-center w-full h-full">
      <p>Home Page</p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Latest Tweets',
    },
  }
}

export default Home
