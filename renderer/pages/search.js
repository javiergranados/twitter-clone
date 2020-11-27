function Search() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <p>Search Page</p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Search Twitter',
    },
  }
}

export default Search
