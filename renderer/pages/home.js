import useSWR from 'swr'
import { internalApiPaths } from '../constants'
import fetcher from '../utils/api'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Timeline from '../components/Timeline'

function Home() {
  const { data } = useSWR(internalApiPaths.FETCH_TWEETS, fetcher)

  if (!data) {
    return <Loading />
  }
  if (data.errors) {
    return <Error errors={data.errors} />
  }
  return <Timeline data={data} />
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Latest Tweets',
    },
  }
}

export default Home
