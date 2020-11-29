import Twit from 'twit'

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})

export default async (req, res) => {
  try {
    T.get('statuses/home_timeline', { count: 10 }, (_, data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500).json(error)
  }
}
