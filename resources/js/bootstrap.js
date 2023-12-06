window._ = require('lodash')

try {
  require('bootstrap')
  // eslint-disable-next-line no-empty
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')
window.axios.defaults.withCredentials = true
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.baseURL = '/api/'
window.axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (
      error.response.status === 401 //|| error.response.status === 419) {
    ) {
      location.assign('/login')
    }

    if (error.response.status === 403) {
      location.assign('/error')
    }

    return Promise.reject(error)
  }
)
