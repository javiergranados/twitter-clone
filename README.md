A twitter timeline clone built with [Nextron](https://github.com/saltyshiomix/nextron) (Nextjs with Electron)

<img alt="logo" src="resources/icon.ico" width="100" />

## Usage

### Environment file

Create an environment file called _.env.development_ and write on it your api keys (you could create them on your [Developer Portal](https://developer.twitter.com/en/portal/dashboard))

```bash
API_KEY="..."
API_KEY_SECRET="..."
ACCESS_TOKEN="..."
ACCESS_TOKEN_SECRET="..."
```

### Twitter username

Customize the [constants](/renderer/constants/api.js) file with your twitter username

### Installing

- Install dependencies and start the app on development mode

```bash
yarn && yarn dev
```

I hope you like it! 😀
