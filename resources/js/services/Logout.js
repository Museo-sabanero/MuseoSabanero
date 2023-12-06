const apiUrl = 'logouts'

export default {
  getUser() {
    return axios
      .get(`${apiUrl}/userSession`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
  getisAuth() {
    return axios
      .get(`${apiUrl}/isAuth`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
}
