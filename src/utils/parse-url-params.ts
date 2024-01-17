interface UrlParams {
  [key: string]: string
}

export function parseUrlParams(url: string): UrlParams {
  const params: UrlParams = {}
  const queryString = url.split('?')[1]

  if (queryString) {
    const pairs = queryString.split('&')

    pairs.forEach(pair => {
      const [key, value] = pair.split('=')
      params[key] = value
    })
  }

  return params
}
