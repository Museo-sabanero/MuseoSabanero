<template>
  <header class="header">
    <div class="logo-wrap">
      <GoBack></GoBack>
    </div>
  </header>
  <div>
    <div class="main-wrap about-us-page mb-xxl">
      <div class="how-do-section pt-0">
        <form class="custom-form" @submit.prevent="handleSubmit">
          <div class="steps-wrap">
            <div class="steps-box">
              <span> <i class="ri-archive-line"></i></span>
              <div class="content">
                <h4 class="title-color font-sm">
                  agregar recurso a actualizar:
                </h4>
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
                      id="inputGroupFileAddon04"
                      type="submit"
                      class="btn btn-outline-secondary"
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
      </div>
    </div>
  </div>
</template>

<script>
import ResourcesService from '../../services/ResourceService'
import GoBack from '../../components/GoBack.vue'
export default {
  name: 'ResourcesUpdate',
  components: {
    GoBack,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      file: null,
      resourcesdata: null,
      showErrorResource: false,
    }
  },

  methods: {
    handleFileInput() {
      this.file = this.$refs.fileInput.files[0]
    },
    async handleSubmit() {
      if (this.file != null) {
        const fileData = new FormData()
        fileData.append('file', this.file)
        fileData.append('id', this.id)

        await ResourcesService.updateResource(fileData)
          .then((_dataFile) => {})
          .finally(() => {
            this.$router.push('/resources/index')
          })
      } else {
        this.showErrorResource = true
      }
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
