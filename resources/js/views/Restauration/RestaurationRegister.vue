<template>
  <header class="header">
    <div class="logo-wrap">
      <a href="#" @click="goBack()"
        ><i class="iconly-Arrow-Left-Square icli"></i
      ></a>
      <h1 class="title-color font-md">Volver</h1>
    </div>
  </header>
  <main class="main-wrap about-us-page mb-xxl">
    <section class="how-do-section pt-0">
      <h3 class="font-theme font-md">Registrar restauración:</h3>
      <form class="custom-form" @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-badge"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Fecha de Entrega:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="startDate"
                      v-model="formData.startDate"
                      type="date"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="invalid-feedback">
                    {{ msj_errors.startDate }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-badge"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Fecha de Recibido:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="endDate"
                      v-model="formData.endDate"
                      type="date"
                      placeholder="Fecha de Recibido"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="invalid-feedback">
                    {{ msj_errors.endDate }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-badge"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Autorizado por:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="userAuthorized"
                      v-model="formData.userAuthorized"
                      class="form-control"
                      :class="{ 'is-invalid': errors_fields.userAuthorized }"
                    >
                      <option value="">----Seleccione----</option>
                      <option
                        v-for="user in users"
                        :key="user.id"
                        :value="user.id"
                      >
                        {{ user.name }}
                      </option>
                    </select>
                  </div>
                  <div class="invalid-feedback">
                    {{ msj_errors.userAuthorized }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-badge"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Articulo:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="articleId"
                      v-model="formData.articleId"
                      class="form-control"
                      :class="{ 'is-invalid': errors_fields.articleId }"
                    >
                      <option value="">----Seleccione----</option>
                      <option
                        v-for="articulo in articulos"
                        :key="articulo.id"
                        :value="articulo.id"
                      >
                        {{ articulo.nombre }}
                      </option>
                    </select>
                  </div>
                  <div class="invalid-feedback">
                    {{ msj_errors.articleId }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-badge"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Tipo:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="type"
                      v-model="formData.type"
                      class="form-control"
                    >
                      <option value="">----Seleccione----</option>
                      <option value="A">Artesanía</option>
                      <option value="T">Herramienta de trabajo</option>
                      <option value="C">Herramienta de cocina</option>
                    </select>
                  </div>
                  <div class="invalid-feedback">
                    {{ msj_errors.type }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-badge"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">
                    Estado de la restauración:
                  </h4>
                  <div class="input-box mt-3">
                    <select
                      id="status"
                      v-model="formData.status"
                      class="form-control"
                    >
                      <option value="1">En proceso</option>
                      <option value="0">Finalizado</option>
                    </select>
                  </div>
                  <div class="invalid-feedback">
                    {{ msj_errors.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="steps-wrap">
            <div class="steps-box">
              <span> <i class="iconly-Location icli"></i></span>
              <div class="content">
                <h4 class="title-color font-sm">Observaciones:</h4>
                <div class="input-box mt-3">
                  <textarea
                    id="observations"
                    v-model="formData.observations"
                    class="form-control"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div class="invalid-feedback">
                  {{ msj_errors.observations }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <button
              type="submit"
              class="btn-solid"
              style="margin-top: 20px; width: 100%"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>
<script>
// import this component
import axios from 'axios'
export default {
  data: function () {
    return {
      users: [],
      articulos: [],
      formData: {
        startDate: '',
        endDate: '',
        type: '',
        articleId: '',
        observations: '',
        status: '',
        userAuthorized: '',
      },
      errors_fields: {
        startDate: false,
        endDate: false,
        type: false,
        articleId: false,
        observations: false,
        status: false,
        userAuthorized: false,
      },
      msj_errors: {
        startDate: 'Debe seleccionar la fecha de entrega!',
        endDate: 'Debe seleccionar la fecha de recibido aproximadamente!',
        type: 'Debe seleccionar el tipo!',
        articleId: 'Debe seleccionar el articulo!',
        observations: 'Las observaciones son requeridas',
        status: 'Debe seleccionar un estado',
        userAuthorized: 'Debe seleccionar el usuario que autoriza!',
      },
    }
  },
  mounted() {
    // this.loadUsers()
    // this.loadArticulos()
    // let user = JSON.parse(localStorage.getItem('user'))
    // this.formData.user_id = user.id
    // if (this.$route.params.id) {
    //   this.formData_id = this.$route.params.id
    //   this.buttonTittle = 'Actualizar'
    //   this.loadformData()
    // }
  },
  methods: {
    // loadUsers() {
    //   let token = localStorage.getItem('acess_token')

    //   axios
    //     .get(this.$api + `user?all="1"`, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     })
    //     .then(({ data }) => {
    //       this.users = data.user
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    // loadArticulos() {
    //   let token = localStorage.getItem('acess_token')

    //   axios
    //     .get(this.$api + `articulo?all="1"`, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     })
    //     .then(({ data }) => {
    //       this.articulos = data.articulos
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    // loadformData() {
    //   let token = localStorage.getItem('acess_token')

    //   axios
    //     .get(this.$api + `formData/${this.formData_id}/edit`, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     })
    //     .then(({ data }) => {
    //       this.formData = data.data
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    validateForm() {
      let bandera = true

      if (this.formData.startDate == '') {
        this.errors_fields.startDate = true
        bandera = false
      }

      if (this.formData.endDate == '') {
        this.errors_fields.endDate = true
        bandera = false
      }

      if (this.formData.userAuthorized == '') {
        this.errors_fields.userAuthorized = true
        bandera = false
      }

      if (this.formData.type == '') {
        this.errors_fields.type = true
        bandera = false
      }

      if (this.formData.articleId == '') {
        this.errors_fields.articleId = true
        bandera = false
      }

      return bandera
    },
  },
}
</script>
