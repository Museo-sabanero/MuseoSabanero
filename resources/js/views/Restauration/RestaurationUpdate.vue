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
          <select
            id="typeArticle"
            v-model="formData.typeArticle"
            class="form-control"
          >
            <option value="">Seleccione tipo de objeto</option>
            <option
              v-for="object in objects"
              :key="object.id"
              :value="object.id"
            >
              {{ object.name }}
            </option>
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
      <router-link
        class="btn btn-primary w-100"
        style="background-color: green; border-color: green; margin-top: 20px"
        :to="{
          name: 'RestaurationApprove',
          params: { id: formData.id },
        }"
        >Recibir restauración finalizada</router-link
      >
    </section>
  </main>
</template>
<script>
import Restaurations from '../../services/RestaurationService'
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
      articlesFilter: [],
      formData: {
        id: 1,
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
      showErrorType: false,
      showErrorArticleId: false,
      showErrorUserAutorized: false,
      showErrorStatus: false,
      list: [],
      objects: [],
    }
  },
  async mounted() {
    await Articles.getArticles().then((data) => {
      console.log(data)
      this.articles = data
      console.log(this.articles)
    })

    this.articles.sort((a, b) => {
      // Compara los títulos de los artículos en orden alfabético
      return a.name.localeCompare(b.name)
    })

    this.articlesFilter = this.articles

    await Users.getUser().then((data) => {
      console.log(data)
      this.users = data
      console.log(this.users)
    })

    await Articles.getTypeObjects().then((data) => {
      console.log(data)
      this.objects = data
    })

    await Restaurations.getRestauration(this.id).then((data) => {
      this.list = data
      console.log('entro')
      console.log(this.list)
      var rest = this.list[0]
      ;(this.formData.id = rest.id),
        (this.formData.userAutorizedSend = rest.userAutorizedSend),
        (this.formData.typeArticle = rest.typeArticle),
        (this.formData.dateSend = rest.dateSend),
        (this.formData.datePrevReceived = rest.datePrevReceived),
        (this.formData.inChargeRestauration = rest.inChargeRestauration),
        (this.formData.placeRestauration = rest.placeRestauration),
        (this.formData.cost = rest.cost),
        (this.formData.articleId = rest.articles[0].id),
        (this.formData.detailsSend = rest.detailsSend)
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
        id: this.formData.id,
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

      Restaurations.updateRestauration(registro).then((data) => {
        console.log(data)
        this.$router.push('/restauration/index')
      })
    },
    goBack() {
      this.$router.push({ name: 'RestaurationView' })
    },
    filterData() {
      const searchTerm = this.searchTerm.toLowerCase()
      if (searchTerm === '') {
        this.articles = [...this.articlesFilter]
      } else {
        console.log('entra a buscador ')
        console.log(this.articlesFilter)
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
