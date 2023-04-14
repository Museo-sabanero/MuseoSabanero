const apiUrl = 'http://127.0.0.1:8001/api/histories'

export default {
  // Obtener todos los donantes
  getHistories() {
    return axios
      .get(`${apiUrl}/getHistories`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getHistory($id) {
    console.log($id)
    return axios
      .get(`${apiUrl}/getHistory?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getHistoryByArticle($id) {
    console.log($id)
    return axios
      .get(`${apiUrl}/getHistoryByArticle?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  createHistory($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  updateHistory($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/update`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  deleteHistory($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/delete`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },
}
