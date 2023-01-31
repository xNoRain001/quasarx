const urlParams = url => {
  const params = {}

  url.replace(/([^?=&#]+)=([^?=&#]+)/g, (...[, $1, $2]) => {
    params[$1] = $2
  })

  url.replace(/#([^?=&#]+)/g, (...[, $1]) => {
    params.hash = $1
  })

  return params
}

export default urlParams
