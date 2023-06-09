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
    console.log($id)
    return axios
      .get(`${apiUrl}/getArticle?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
  getTypeObject($id) {
    console.log($id)
    return axios
      .get(`${apiUrl}/getTypeObject?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getArticleById($id) {
    console.log($id)
    return axios
      .get(`${apiUrl}/getArticleById?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  createArticle($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    // .catch((error) => Promise.reject(error))
  },

  updateArticle($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/update`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  deleteArticle($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/delete`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },
}
