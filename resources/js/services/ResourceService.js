const apiUrl = 'resources'

export default {
  //Obtener todos los donantes
  getResources() {
    return axios
      .get(`${apiUrl}/getResources`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
  // downloadResource(FILENAME,FILEPATH) {
  //   return axios
  //     .get(`${apiUrl}/downloadResource?filename=${FILENAME}&filepath=${FILEPATH}`)
  //     .then((response) => response.data)
  //     .catch((error) => Promise.reject(error))
  // },
  createResource($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    //.catch((error) => Promise.reject(error))
  },
  deleteResource($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/delete`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },
  updateResource($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/update`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },
}
