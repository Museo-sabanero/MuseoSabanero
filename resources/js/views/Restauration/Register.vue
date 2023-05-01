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
          <h4 class="title-color font-sm">Articulo:</h4>
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
        </div>
        <div>
          <select
            id="typeArticle"
            v-model="formData.typeArticle"
            class="form-control"
          >
            <option value="">Seleccione el tipo</option>
            <option value="A">Artesanía</option>
            <option value="T">Herramienta de trabajo</option>
            <option value="C">Herramienta de cocina</option>
          </select>
          <p
            v-if="showErrorTypeArticle && !formData.typeArticle"
            style="color: red"
          >
            Debe seleccionar un tipo
          </p>
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">Autorizado por:</h4>
        </div>
        <div>
          <select
            id="userAutorizedSend"
            v-model="formData.userAutorizedSend"
            class="form-control"
          >
            <option value="">Seleccione el usuario que autoriza</option>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
          <p
            v-if="showErrorUserAutorizedSend && !formData.userAutorizedSend"
            style="color: red"
          >
            Debe seleccionar un usuario
          </p>
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">Fecha de envio a restauración:</h4>
        </div>
        <div>
          <input
            id="dateSend"
            v-model="formData.dateSend"
            type="date"
            class="form-control"
            required
          />
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">
            Fecha prevista de recibido de restauración:
          </h4>
        </div>
        <div>
          <input
            id="datePrevReceived"
            v-model="formData.datePrevReceived"
            type="date"
            class="form-control"
            required
          />
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">
            Encargado de realizar la restauración:
          </h4>
        </div>
        <div>
          <input
            id="inChargeRestauration"
            v-model="formData.inChargeRestauration"
            maxlength="70"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">
            Lugar donde se realiza la restauración:
          </h4>
        </div>
        <div>
          <input
            id="placeRestauration"
            v-model="formData.placeRestauration"
            maxlength="70"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">
            Coste de la restauración: (Si no tiene coste coloque un 0)
          </h4>
        </div>
        <div>
          <input
            id="cost"
            v-model="formData.cost"
            maxlength="70"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div style="text-align: left">
          <br />
          <h4 class="title-color font-sm">
            Detalles del envío a restauración:
          </h4>
        </div>
        <div>
          <textarea
            id="detailsSend"
            v-model="formData.detailsSend"
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
  name: 'RestaurationRegister',
  components: {
    GoBack,
  },
  data() {
    return {
      users: [],
      articles: [],
      formData: {
        userAutorizedSend: '',
        typeArticle: '',
        dateSend: '',
        datePrevReceived: '',
        inChargeRestauration: '',
        placeRestauration: '',
        cost: '',
        articleId: '',
        detailsSend: '',
      },
      showErrorTypeArticle: false,
      showErrorArticleId: false,
      showErrorUserAutorizedSend: false,
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
  },
  methods: {
    handleSubmit() {
      if (!this.formData.userAutorizedSend) {
        return (this.showErrorUserAutorizedSend = true)
      }
      if (!this.formData.articleId) {
        return (this.showErrorArticleId = true)
      }
      if (!this.formData.typeArticle) {
        return (this.showErrorTypeArticle = true)
      }
      console.log(this.formData)
      const registro = {
        userAutorizedSend: this.formData.userAutorizedSend,
        typeArticle: this.formData.typeArticle,
        dateSend: this.formData.dateSend,
        datePrevReceived: this.formData.datePrevReceived,
        inChargeRestauration: this.formData.inChargeRestauration,
        placeRestauration: this.formData.placeRestauration,
        articleId: this.formData.articleId,
        cost: this.formData.cost,
        detailsSend: this.formData.detailsSend,
      }
      console.log(registro)

      Restaurations.createRestauration(registro).then((data) => {
        console.log(data)
        // this.$router.push('/event/index')
      })
    },
    goBack() {
      this.$router.push({ name: 'Event' })
    },
  },
}
</script>
