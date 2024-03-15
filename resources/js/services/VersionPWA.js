const apiUrl = 'version'

export default {
  checkVersion() {
    return axios
      .get(`${apiUrl}/checkUpdate`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
  getisAuth() {
    return axios
      .get(`${apiUrl}/getVersion`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
}
