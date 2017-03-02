import request from 'superagent'

export default {
  get (endpoint) {
    return this.request('get', endpoint)
  },

  post (endpoint, data) {
    return this.request('post', endpoint, data)
  },

  put (endpoint, data) {
    return this.request('put', endpoint, data)
  },

  del (endpoint, data) {
    return this.request('del', endpoint, data)
  },

  request (method, endpoint, data) {
    const url = `/api${endpoint}`

    return new Promise((resolve, reject) => {
      const req = request[method](url)

      if (method === 'post' || method === 'put') {
        req.send(data)
      }

      req.end((err, res) => {
        if (!res) {
          return reject({
            message: err.message,
            status: 500
          })
        }

        if (res.status !== 200) {
          return reject({
            message: res.body.message || res.text,
            status: res.status
          })
        }

        resolve(res.body)
      })
    })
  }
}
