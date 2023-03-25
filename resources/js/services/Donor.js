
const apiUrl = 'http://127.0.0.1:8001/api/donores'

export default {
  // Obtener todos los donantes
  getDonors() {
    return axios
      .get(`${apiUrl}/showDonor`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

}
