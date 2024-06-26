import axios from 'axios'
const apiUrl = 'restaurations'

export default {
  getRestaurations() {
    return axios
      .get(`${apiUrl}/getRestaurations`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getRestauration($id) {
    return axios
      .get(`${apiUrl}/getRestauration?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getRestaurationsByArticle($id) {
    return axios
      .get(`${apiUrl}/getRestaurationsByArticle?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  createRestauration($data) {
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    //.catch((error) => Promise.reject(error))
  },

  updateRestauration($data) {
    return axios
      .post(`${apiUrl}/update`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  approveRestauration($data) {
    return axios
      .post(`${apiUrl}/approve`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  //   deleteRestauration($data) {
  //     console.log($data)
  //     return axios
  //       .post(`${apiUrl}/delete`, $data)
  //       .then((response) => response.data)
  //     //   .catch((error) => Promise.reject(error))
  //   },
}
