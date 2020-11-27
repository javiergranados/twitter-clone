function Notifications() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <p>Notifications Page</p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Notifications',
    },
  }
}

export default Notifications
