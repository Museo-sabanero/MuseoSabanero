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
      <h3 class="font-theme font-md">Registrar Restauración</h3>
      <form class="custom-form" @submit.prevent="handleSubmit">
        <div style="text-align: left">
          <h4 class="title-color font-sm">Fecha de Entrega:</h4>
          <br />
        </div>
        <div>
          <input
            id="startDate"
            v-model="formData.startDate"
            type="date"
            class="form-control"
            required
          />
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">Fecha de Recibido:</h4>
          <br />
        </div>
        <div>
          <input
            id="endDate"
            v-model="formData.endDate"
            type="date"
            class="form-control"
            required
          />
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">Autorizado por:</h4>
          <br />
        </div>
        <div>
          <select
            id="userAuthorized"
            v-model="formData.userAuthorized"
            class="form-control"
          >
            <option value="">Seleccione el usuario que autoriza</option>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
          <p
            v-if="showErrorUserAutorized && !formData.userAuthorized"
            style="color: red"
          >
            Debe seleccionar un usuario
          </p>
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">Articulo:</h4>
          <br />
        </div>
        <div>
          <select
            id="articleId"
            v-model="formData.articleId"
            class="form-control"
          >
            <option value="">Seleccione el artículo</option>
            <option
              v-for="articulo in articles"
              :key="articulo.id"
              :value="articulo.id"
            >
              {{ articulo.name }}
            </option>
          </select>
          <p
            v-if="showErrorArticleId && !formData.articleId"
            style="color: red"
          >
            Debe seleccionar un artículo
          </p>
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">Tipo:</h4>
          <br />
        </div>
        <div>
          <select id="type" v-model="formData.type" class="form-control">
            <option value="">Seleccione el tipo</option>
            <option value="A">Artesanía</option>
            <option value="T">Herramienta de trabajo</option>
            <option value="C">Herramienta de cocina</option>
          </select>
          <p v-if="showErrorType && !formData.type" style="color: red">
            Debe seleccionar un tipo
          </p>
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">Estado de la restauración:</h4>
          <br />
        </div>
        <div>
          <select id="status" v-model="formData.status" class="form-control">
            <option value="">Seleccione el estado de la restauración</option>
            <option value="1">En proceso</option>
            <option value="0">Finalizado</option>
          </select>
          <p v-if="showErrorStatus && !formData.status" style="color: red">
            Debe seleccionar un estado de restauración
          </p>
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">Observaciones:</h4>
          <br />
        </div>
        <div>
          <textarea
            id="observations"
            v-model="formData.observations"
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
import Restaurations from '../../services/Restauration'
import Articles from '../../services/ArticleService'
import Users from '../../services/User'
import GoBack from '../../components/GoBack.vue'
export default {
  name: 'RestaurationUpdate',
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
      users: [],
      articles: [],
      formData: {
        startDate: '',
        endDate: '',
        type: '',
        articleId: '',
        observations: '',
        status: '',
        userAuthorized: '',
      },
      showErrorType: false,
      showErrorArticleId: false,
      showErrorUserAutorized: false,
      showErrorStatus: false,
      list: [],
    }
  },
  async mounted() {
    await Articles.getArticles().then((data) => {
      console.log(data)
      this.articles = data
      console.log(this.articles)
    })

    await Users.getUser().then((data) => {
      console.log(data)
      this.users = data
      console.log(this.users)
    })

    await Restaurations.getRestauration(this.id).then((data) => {
      this.list = data
      console.log('entro')
      console.log(this.list)
      var rest = this.list[0]
      ;(this.formData.id = rest.id),
        (this.formData.startDate = rest.startDate),
        (this.formData.endDate = rest.endDate),
        (this.formData.type = rest.type),
        (this.formData.articleId = rest.articles[0].id),
        (this.formData.observations = rest.observations),
        (this.formData.status = rest.status),
        (this.formData.userAuthorized = rest.userAuthorized)
    })
  },
  methods: {
    handleSubmit() {
      if (!this.formData.userAuthorized) {
        return (this.showErrorUserAutorized = true)
      }
      if (!this.formData.articleId) {
        return (this.showErrorArticleId = true)
      }
      if (!this.formData.type) {
        return (this.showErrorType = true)
      }
      if (!this.formData.status) {
        return (this.showErrorStatus = true)
      }
      console.log(this.formData)
      const registro = {
        id: this.formData.id,
        startDate: this.formData.startDate,
        endDate: this.formData.endDate,
        type: this.formData.type,
        articleId: this.formData.articleId,
        observations: this.formData.observations,
        status: this.formData.status,
        userAuthorized: this.formData.userAuthorized,
      }
      console.log(registro)

      Restaurations.updateRestauration(registro).then((data) => {
        console.log(data)
        this.$router.push('/restauration/index')
      })
    },
    goBack() {
      this.$router.push({ name: 'Restauration' })
    },
  },
}
</script>
