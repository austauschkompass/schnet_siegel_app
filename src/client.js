class Client {


  constructor() {
    this.host = process.env.REACT_APP_API_HOST
    this.prefix = process.env.REACT_APP_API_PREFIX
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
      mode: 'cors',
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
