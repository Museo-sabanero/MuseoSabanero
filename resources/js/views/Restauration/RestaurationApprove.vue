<template>
  <header class="header">
    <div class="logo-wrap">
      <a href="#" @click="goBack()"
        ><i class="iconly-Arrow-Left-Square icli"></i
      ></a>
      <h1 class="title-color font-md">Volver</h1>
    </div>
  </header>
  <main class="main-wrap login-page mb-xxl">
    <section class="login-section p-0">
      <h3 class="font-theme font-md">Recibir Restauración</h3>
      <form class="custom-form" @submit.prevent="handleSubmit">
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">
            Recepción de la restauración autorizado por:
          </h4>
        </div>
        <div>
          <select
            id="userAutorizedReceived"
            v-model="formData.userAutorizedReceived"
            class="form-control"
          >
            <option value="">
              Seleccione el usuario que autoriza la recepción de la restauración
            </option>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
          <p
            v-if="
              showErroruserAutorizedReceived && !formData.userAutorizedReceived
            "
            style="color: red"
          >
            Debe seleccionar un usuario
          </p>
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">
            Fecha de recibido de restauración:
          </h4>
        </div>
        <div>
          <input
            id="dateReceived"
            v-model="formData.dateReceived"
            type="date"
            class="form-control"
            required
          />
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">
            Detalles de la recepción de la restauración:
          </h4>
        </div>
        <div>
          <textarea
            id="detailsReceived"
            v-model="formData.detailsReceived"
            class="form-control"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn-solid">Guardar</button>
      </form>
    </section>
  </main>
</template>
<script>
import Restaurations from '../../services/RestaurationService'
import Articles from '../../services/ArticleService'
import Users from '../../services/User'
export default {
  name: 'RestaurationApprove',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      users: [],
      formData: {
        id: '',
        userAutorizedReceived: '',
        dateReceived: '',
        detailsReceived: '',
      },
      showErrorUserAutorized: false,
      list: [],
    }
  },
  async mounted() {
    await Users.getUser().then((data) => {
      console.log(data)
      this.users = data
      console.log(this.users)
    })

    this.formData.id = this.id
  },
  methods: {
    handleSubmit() {
      if (!this.formData.userAutorizedReceived) {
        return (this.showErroruserAutorizedReceived = true)
      }
      console.log(this.formData)
      const registro = {
        id: this.formData.id,
        userAutorizedReceived: this.formData.userAutorizedReceived,
        dateReceived: this.formData.dateReceived,
        detailsReceived: this.formData.detailsReceived,
      }
      console.log(registro)

      Restaurations.approveRestauration(registro).then((data) => {
        console.log(data)
        this.$router.push('/restauration/index')
      })
    },
    goBack() {
      this.$router.push({ name: 'RestaurationView' })
    },
  },
}
</script>
