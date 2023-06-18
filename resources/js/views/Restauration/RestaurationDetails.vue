<template>
  <header class="header">
    <div class="logo-wrap">
      <GoBack></GoBack>
    </div>
  </header>
  <main class="main-wrap product-page mb-xxl">
    <div
      class="banner"
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background-color: #f5f5f500;
      "
    >
      <i
        class="bx bx-wrench font-theme"
        style="font-size: 2rem; margin-right: 10px"
      ></i>
      <h2 class="font-theme" style="font-size: 1.5rem; font-weight: 500">
        Detalle de Restauración:
      </h2>
    </div>

    <!-- Product Review Section Start -->
    <section class="product-review pb-0">
      <div class="top-content"></div>
      <div class="review-wrap">
        <div class="review-box">
          <div class="media">
            <span class="badge bg-success text-uppercase mb-2">{{
              formData.statusDescription
            }}</span>
            <div class="media-body">
              <h3 class="font-theme">Artículo: {{ articleName }}</h3>
              <div class="rating">
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
              </div>
            </div>
          </div>
          <br />
          <h4 class="font-sm title-color">
            Detalle: {{ formData.detailsSend }}
          </h4>
          <p class="font-sm content-color">
            <strong>Tipo de artículo: </strong>
            {{ formData.typeArticle }}
          </p>
          <p class="font-sm content-color">
            <strong>Encargado de realizar la restauración: </strong>
            {{ formData.inChargeRestauration }}
          </p>
          <p class="font-sm content-color">
            <strong>Lugar donde se realizó la restauración: </strong>
            {{ formData.placeRestauration }}
          </p>
          <p class="font-sm content-color">
            <strong>Usuario que autorizó: </strong>
            {{ formData.userAutorizedSendName }}
          </p>
          <p class="font-sm content-color">
            <strong>Fecha de envio a restauración: </strong>
            {{ formData.dateSend }}
          </p>
          <p class="font-sm content-color">
            <strong>Fecha prevista de recibido de restauración: </strong>
            {{ formData.datePrevReceived }}
          </p>
          <p class="font-sm content-color">
            <strong> Costo de la restauración: </strong>
            {{ formData.cost }}
          </p>
        </div>
      </div>
    </section>
    <!-- Product Review Section End -->
    <div v-if="formData.status == 'A'">
      <div
        class="banner"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: #f5f5f500;
        "
      >
        <i
          class="bx bx-check-square font-theme"
          style="font-size: 2rem; margin-right: 10px"
        ></i>
        <h4
          class="font-theme font-lg"
          style="font-size: 1.5rem; font-weight: 500"
        >
          Detalle de la aprobación:
        </h4>
      </div>
      <section class="product-review pb-0">
        <div class="review-wrap">
          <div class="review-box">
            <h4 class="font-sm title-color">
              Detalle: {{ formData.detailsReceived }}
            </h4>
            <p class="font-sm content-color">
              <strong>Recepción de la restauración autorizado por: </strong>
              {{ formData.userAutorizedReceivedName }}
            </p>
            <p class="font-sm content-color">
              <strong>Fecha de recibido de restauración:</strong>
              {{ formData.dateReceived }}
            </p>
          </div>
        </div>
      </section>
      <!-- Product Review Section End -->
    </div>
    <div v-if="formData.status == 'E'">
      <div
        class="banner"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: #f5f5f500;
        "
      >
        <i
          class="bx bx-message-square-error font-theme"
          style="font-size: 2rem; margin-right: 10px"
        ></i>
        <h4
          class="font-theme font-lg"
          style="font-size: 1.5rem; font-weight: 500"
        >
          La restauración todavía no ha sido recibida.
        </h4>
      </div>
    </div>
  </main>
</template>
<script>
import Restaurations from '../../services/RestaurationService'
import Articles from '../../services/ArticleService'
import GoBack from '../../components/GoBack.vue'
import Users from '../../services/User'
export default {
  name: 'RestaurationDetails',
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
      articleName: '',
      articleId: '',
      article: [],
      formData: {
        id: 1,
        userAutorizedSend: '',
        userAutorizedSendName: '',
        typeArticle: '',
        dateSend: '',
        datePrevReceived: '',
        inChargeRestauration: '',
        placeRestauration: '',
        cost: '',
        articleId: '',
        detailsSend: '',
        status: '',
        statusDescription: '',
        objectTypeDescription: '',
        userAutorizedReceived: '',
        userAutorizedReceivedName: '',
        dateReceived: '',
        detailsReceived: '',
      },
      showErrorType: false,
      showErrorArticleId: false,
      showErrorUserAutorized: false,
      showErrorStatus: false,
      list: [],
    }
  },
  async mounted() {
    await Users.getUser().then((data) => {
      console.log(data)
      this.users = data
      console.log(this.users)
    })

    await Restaurations.getRestauration(this.id).then(async (data) => {
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
        (this.formData.detailsSend = rest.detailsSend),
        (this.formData.status = rest.status),
        (this.formData.statusDescription = rest.statusDescription),
        (this.formData.objectTypeDescription = rest.objectTypeDescription),
        (this.formData.userAutorizedReceived = rest.userAutorizedReceived),
        (this.formData.dateReceived = rest.dateReceived),
        (this.formData.detailsReceived = rest.detailsReceived),
        await Users.getUserbyId(this.formData.userAutorizedSend).then(
          (userData) => {
            this.formData.userAutorizedSendName = userData.name
          }
        )
      if (this.formData.status == 'A') {
        await Users.getUserbyId(this.formData.userAutorizedReceived).then(
          (userDataRece) => {
            this.formData.userAutorizedReceivedName = userDataRece.name
          }
        )
      }
    })

    await Articles.getArticleById(this.formData.articleId).then((data) => {
      this.article = data
      this.articleName = data[0].name
    })
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'RestaurationView' })
    },
  },
}
</script>
