const apiUrl = 'histories'

export default {
  // Obtener todos los donantes
  getHistories() {
    return axios
      .get(`${apiUrl}/getHistories`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getHistory($id) {
    return axios
      .get(`${apiUrl}/getHistory?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getHistoryByArticle($id) {
    return axios
      .get(`${apiUrl}/getHistoryByArticle?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  createHistory($data) {
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  updateHistory($data) {
    return axios
      .post(`${apiUrl}/update`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  deleteHistory($data) {
    return axios
      .post(`${apiUrl}/delete`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },
}
