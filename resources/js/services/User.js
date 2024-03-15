import axios from 'axios'
const apiUrl = 'users'

export default {
  // Obtener todos los usuarios
  getUser() {
    return axios
      .get(`${apiUrl}/showUser`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getUserbyId($id) {
    return axios
      .get(`${apiUrl}/detailsUserById?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  //Obtener los detalles de un usuario
  getDetails() {
    return axios
      .get(`${apiUrl}/detailsUser`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  //Registrar usuarios
  register(requestOptions) {
    return axios
      .post(`${apiUrl}/register`, requestOptions)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  update(requestOptions) {
    return axios
      .put(`${apiUrl}/update`, requestOptions)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
  delete($data) {
    return axios
      .post(`${apiUrl}/delete`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },
}
