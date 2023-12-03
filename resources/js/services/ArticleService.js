const apiUrl = 'articles'

export default {
  // Obtener todos los donantes
  getArticles() {
    return axios
      .get(`${apiUrl}/getArticles`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getTypeObjects() {
    return axios
      .get(`${apiUrl}/getTypeObjects`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getArticle($id) {
    return axios
      .get(`${apiUrl}/getArticle?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
  getTypeObject($id) {
    return axios
      .get(`${apiUrl}/getTypeObject?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getArticleById($id) {
    return axios
      .get(`${apiUrl}/getArticleById?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  createArticle($data) {
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    // .catch((error) => Promise.reject(error))
  },

  updateArticle($data) {
    return axios
      .post(`${apiUrl}/update`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  deleteArticle($data) {
    return axios
      .post(`${apiUrl}/delete`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },
}
