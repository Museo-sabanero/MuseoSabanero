<template>
  <div>
    <div class="main-wrap about-us-page mb-xxl">
      <div class="how-do-section pt-0">
        <form class="custom-form" @submit.prevent="handleSubmit">
          <div class="steps-wrap">
            <div class="steps-box">
              <span> <i class="bx bx-image"></i></span>
              <div class="content">
                <h4 class="title-color font-sm">agregar recurso:</h4>
                <div class="input-box mt-3">
                  <div class="input-group">
                    <input
                      id="inputGroupFile04"
                      ref="fileInput"
                      type="file"
                      class="form-control"
                      accept=".png, .jpg, .jpeg, .pdf, .doc, .docx, .xls, .xlsx, csv, .ppt , .pptx , .bpm , .vsdx , .vsdm"
                      @change="handleFileInput"
                    />
                    <button
                      type="submit"
                      class="btn btn-outline-secondary"
                      id="inputGroupFileAddon04"
                    >
                      agregar
                    </button>
                  </div>
                  <p v-if="showErrorResource" style="color: red">
                    *Debe seleccionar un archivo para agregar el recurso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
        <hr />
        <!-- <table>
          <thead>
            <tr>
              <th>Nombre del Recurso</th>
              <th>Medio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Manual de Usuario</td>
              <td>
                <label> Google Drive </label>
              </td>
              <td>
                <div class="row">
                  <div class="col-6">
                    <a :href="manualUsuario" target="_blank">
                      <i class="iconly-Show icli boton"></i>
                    </a>
                  </div>
                  <div class="col-6">
                    <DescargarGoogleDrive :enlace="manualUsuario" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Manual Técnico</td>
              <td>
                <label> Google Drive </label>
              </td>
              <td>
                <div class="row">
                  <div class="col-6">
                    <a :href="manualTecnico" target="_blank">
                      <i class="iconly-Show icli boton"></i>
                    </a>
                  </div>
                  <div class="col-6">
                    <DescargarGoogleDrive :enlace="manualTecnico" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table> -->
        <table>
          <thead>
            <tr>
              <th>Nombre del Recurso</th>
              <th>Tipo de Archivo</th>
              <th>Fecha de creacion</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in this.resourcesdata" :key="index">
              <th>{{ item.FILENAME }}</th>
              <th>{{ item.TIPO }}</th>
              <th>{{ item.created_at }}</th>
              <th>
                <div class="row">
                  <!-- <div class="col-6">
                    <a :href="manualTecnico" target="_blank">
                      <i class="iconly-Show icli boton"></i>
                    </a>
                  </div> -->
                  <div class="col-6">
                    <!-- <a href="downloadResource?filename="+{{ item.FILENAME }} target="_blank">
                      <i class="iconly-Show icli boton"></i>
                    </a>
                    <button @click="descargar(item.FILENAME, item.FILEPATH)">
                      <i class="iconly-Download icli boton"></i>
                    </button> -->

                    <!-- <DescargarGoogleDrive :enlace="manualTecnico" /> -->
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ResourcesService from '../../services/ResourceService'
import DescargarGoogleDrive from './DescargarGoogleDrive.vue'
export default {
  name: 'Resources',
  components: {
    DescargarGoogleDrive,
  },
  data() {
    return {
      files: null,
      resourcesdata: null,
      showErrorResource: false,
      manualUsuario:
        'https://drive.google.com/file/d/1fgFhqS0hZ2_fEqIq_63Wp67Xjy3WXeSW/view?usp=sharing',
      manualTecnico:
        'https://drive.google.com/file/d/1tnoJnJ_1ouhl4U-jCpmpNhFwV5svQxCJ/view?usp=sharing',
    }
  },
  async mounted() {
    await ResourcesService.getResources().then((data) => {
      //console.log(data.resource)
      this.resourcesdata = data.resource
      console.log(this.resourcesdata)
    })
  },
  methods: {
    handleSubmit() {
      console.log('Submit')
      if (this.file != null) {
        const fileData = new FormData()
        fileData.append('file', this.file)
        ResourcesService.createResource(fileData).then((dataFile) => {
          console.log(dataFile)
        }).finally(() => {
          window.location.reload()
        })
      } else {
        this.showErrorResource = true
      }
    },
    handleFileInput() {
      this.file = this.$refs.fileInput.files[0]
    },
    descargar(FILENAME, FILEPATH) {
      ResourcesService.downloadResource(FILENAME, FILEPATH).then((dataFile) => {
        //console.log(dataFile)
      })
    },
  },
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f0f0f0;
  color: #0d2d6d;
}

.boton {
  background-color: #0d2d6d;
  color: #f0f0f0;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  align-items: center;
  font-size: medium;
}
</style>
