const apiUrl = 'events'

export default {
  // Obtener todos los donantes
  getEvents() {
    return axios
      .get(`${apiUrl}/getEvents`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getEvent($id) {
    return axios
      .get(`${apiUrl}/getEvent?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  createEvent($data) {
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  updateEvent($data) {
    return axios
      .post(`${apiUrl}/update`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  deleteEvent($data) {
    return axios
      .post(`${apiUrl}/delete`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },
}
