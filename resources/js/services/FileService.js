const apiUrl = 'files'

export default {
  // Obtener todos los donantes

  registerFile($data) {
    console.log($data)
    return axios
      .post(`${apiUrl}/store`, $data)
      .then((response) => response.data)
    //   .catch((error) => Promise.reject(error))
  },
}

// import axios from 'axios'

// async function insertFile(formData) {
//   try {
//     const response = await axios.post(`${apiUrl}/store`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     })
//     return response.data
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

// async function saveData(dataObj) {
//   try {
//     await insertFile(dataObj)
//     console.log('Datos guardados en línea')
//   } catch (error) {
//     console.log('No se pudo guardar en línea, almacenando en IndexedDB')
//     const dbPromise = window.indexedDB.open(dbName, 1)
//     dbPromise.onupgradeneeded = function (event) {
//       const db = event.target.result
//       const objectStore = db
//         .createObjectStore(objectStoreName, {
//           keyPath: 'id',
//           autoIncrement: true,
//         })
//         .then((response) => response.data)
//         .catch((error) => Promise.reject(error))
//     }
//   }
// }

// async function showFile(id, location) {
//   try {
//     const response = await axios.get(`/files/${id}/${location}/showFile`)
//     return response.data
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

// async function showSignature(id, location) {
//   try {
//     const response = await axios.get(`/files/${id}/${location}/showSignature`)
//     return response.data
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

// async function downloadFile(id, location) {
//   try {
//     const response = await axios.get(`/files/${id}/${location}/download`)
//     return response.data
//   } catch (error) {
//     const errorMessage =
//       'No se pudo descargar el archivo. Verifique su conexión a Internet.'
//     return Promise.reject(new Error(errorMessage))
//   }
// }

// async function deleteFiles(data) {
//   return axios
//     .put(`/files/${data.id}/${data.location}/delete`, data)
//     .then((response) => response.data)
//     .catch((error) => Promise.reject(error))
// }

// export default {
//   insertFile,
//   saveData,
//   showFile,
//   downloadFile,
//   showSignature,
//   deleteFiles,
// }
