const apiUrl = 'http://127.0.0.1:8001/api/donores'

export default {
  // Obtener todos los donantes
  getDonors() {
    return axios
      .get(`${apiUrl}/showDonor`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  //Obtener los detalles de un donante
  getDetails(id) {
    return axios
      .get(`${apiUrl}/${id}/detailsDonor`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
  getDetailsByCedula(cedula) {
    return axios
      .get(`${apiUrl}/${cedula}/detailsDonorByCedula`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  //Cambiar estado
  changeStatus(id) {
    return axios
      .put(`${apiUrl}/${id}/changeStatus`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  //Registrar donantes
  register(requestOptions) {
    return axios
      .post(`${apiUrl}/register`, requestOptions)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
}
