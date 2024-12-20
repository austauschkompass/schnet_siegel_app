class Client {


  constructor({ host, prefix }) {
    this.host = host
    this.prefix = prefix
  }

  checkStatus(response) {
    if (response.status < 500) {
      return response
    }
    return Promise.reject({
      message: response.statusText,
      response: response
    })
  }

  getStats(orgaSlug) {
    const init = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    return fetch(this.host + this.prefix + /rating_stats/ + orgaSlug, init)
      .then(this.checkStatus)
      .then(res => res.json())
  }
}

export default Client
