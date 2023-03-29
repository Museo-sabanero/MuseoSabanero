const apiUrl = '/products'

export default {
  // Obtener todos los productos
  getProducts() {
    return axios
      .get(`${apiUrl}/product`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },
}
