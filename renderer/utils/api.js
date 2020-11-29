const handleResponse = response => {
  if (response.ok) {
    return response.json()
  }
  const error = { code: response.status, description: response.statusText }
  return Promise.resolve({ hasError: true, error })
}

const fetcher = async (path, method = 'GET', body) =>
  // eslint-disable-next-line
  fetch(path, {
    method,
    ...(method !== 'GET' && body && { body: JSON.stringify(body) }),
  }).then(handleResponse)

export default fetcher
