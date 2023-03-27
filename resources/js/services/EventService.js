const apiUrl = 'http://127.0.0.1:8001/api/events'

export default {
  // Obtener todos los donantes
  getEvents() {
    return axios
      .get(`${apiUrl}/getEvents`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  getEvent($id) {
    console.log($id)
    return axios
      .get(`${apiUrl}/getEvent?id=` + $id)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  createEvent($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  updateEvent($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/update`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },

  deleteEvent($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/delete`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },
}
