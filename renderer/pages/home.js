function Home() {
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
