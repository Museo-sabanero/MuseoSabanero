const apiUrl = 'http://127.0.0.1:8000/api/logouts'

export default {
  getUser() {
    return axios
      .get(`${apiUrl}/userSession`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
}
