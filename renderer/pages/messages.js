function Messages() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <p>Messages Page</p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Messages',
    },
  }
}

export default Messages
