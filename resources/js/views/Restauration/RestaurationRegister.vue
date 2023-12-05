<template>
  <header class="header">
    <div class="logo-wrap">
      <GoBack></GoBack>
    </div>
  </header>
  <main class="main-wrap login-page mb-xxl">
    <section class="login-section p-0">
      <h3 class="font-theme font-md">Registrar Restauración</h3>
      <form class="custom-form" @submit.prevent="handleSubmit">
        <div style="text-align: left">
          <h4 class="title-color font-sm">Articulo:</h4>
        </div>
        <div class="search-box">
          <input
            v-model="searchTerm"
            class="form-control"
            type="search"
            placeholder="Buscar artículo por nombre o N° referencia, después despliega la selección."
            @input="filterData()"
          />
        </div>
        <br />
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
              Nombre: {{ articulo.name }}, Número de referencia:
              {{ articulo.numRefInter }}
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
          <input
            id="typeArticle"
            v-model="formData.typeArticle"
            maxlength="70"
            type="text"
            required
            class="form-control"
          />
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
            Costo de la restauración: (Si no tiene costo coloque un 0)
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
import Restaurations from '../../services/RestaurationService'
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
      articlesFilter: [],
      objects: [],
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
      showErrorArticleId: false,
      showErrorUserAutorizedSend: false,
      errorMessage: null,
    }
  },
  async mounted() {
    await Articles.getArticles().then((data) => {
      this.articles = data
    })

    this.articles.sort((a, b) => {
      // Compara los títulos de los artículos en orden alfabético
      return a.name.localeCompare(b.name)
    })

    this.articlesFilter = this.articles

    await Users.getUser().then((data) => {
      this.users = data
    })

    await Articles.getTypeObjects().then((data) => {
      this.objects = data
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

      Restaurations.createRestauration(registro).then((data) => {
        this.$router.push('/restauration/index')
      })
    },
    goBack() {
      this.$router.push({
        name: 'RestaurationView',
      })
    },
    filterData() {
      const searchTerm = this.searchTerm.toLowerCase()
      if (searchTerm === '') {
        this.articles = [...this.articlesFilter]
      } else {
        const expression = new RegExp(searchTerm, 'i')
        this.articles = this.articlesFilter.filter(
          (item) =>
            expression.test(item.name) || expression.test(item.numRefInter)
        )
      }
    },
  },
}
</script>
