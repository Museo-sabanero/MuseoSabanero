const apiUrl = 'bitacora'

export default {
  // Obtener todos la bitacora
  getBitacora() {
    return axios
      .get(`${apiUrl}/showBitacora`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getBitacoraById($id) {
    return axios
      .get(`${apiUrl}/detailsBitacoraById?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  //Obtener los detalles de la bitacora
  getDetails(id) {
    return axios
      .get(`${apiUrl}/${id}/detailsBitacora`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getBitacoraByIdArticulo(id_articulo) {
    return axios
      .get(`${apiUrl}/${id_articulo}/bitacoraByIdArticulo`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  createBitacora($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  //Cambiar estado
  changeStatus(id) {
    return axios
      .put(`${apiUrl}/${id}/changeStatus`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  update(requestOptions) {
    return axios
      .put(`${apiUrl}/update`, requestOptions)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
}
