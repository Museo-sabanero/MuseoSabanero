import axios from 'axios'
const apiUrl = 'http://127.0.0.1:8000/api/restaurations'

export default {
  getRestaurations() {
    return axios
      .get(`${apiUrl}/getRestaurations`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getRestauration($id) {
    console.log($id)
    return axios
      .get(`${apiUrl}/getRestauration?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  createRestauration($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    //.catch((error) => Promise.reject(error))
  },

  updateRestauration($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/update`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  approveRestauration($data) {
    console.log($data)
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
