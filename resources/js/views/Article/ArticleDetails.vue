<template>
  <!-- Main Start -->
  <header class="header">
    <div class="logo-wrap">
      <a href="#" @click="goBack()"
        ><i class="iconly-Arrow-Left-Square icli"></i
      ></a>
      <h1 class="title-color font-md">Volver</h1>
    </div>
  </header>
  <main class="main-wrap product-page mb-xxl">
    <!-- Banner Section Start -->
    <div class="banner-box product-banner">
      <div class="banner" style="display: flex; justify-content: center">
        <div>
          <img
            src="/images/museo/frontPage.png"
            alt="veg"
            style="
              display: block;
              max-width: 50%;
              height: auto;
              padding: 20px;
              box-sizing: border-box;
            "
          />
        </div>
      </div>
    </div>
    <!-- Banner Section End -->

    <!-- Product Section Section Start -->
    <section class="product-section">
      <h1 class="font-md">{{ article.name }}</h1>
      <div class="rating">
        <i data-feather="star"></i>
        <i data-feather="star"></i>
        <i data-feather="star"></i>
        <i data-feather="star"></i>
        <i data-feather="star"></i>
      </div>
      <div class="price">
        <span>Título: </span><span>{{ article.title }}</span>
      </div>

      <!-- Product Detail Start -->
      <div class="product-detail section-p-t">
        <div class="product-detail-box">
          <h2 class="title-color">Detalles del artículo</h2>
          <br />
          <div style="display: flex; flex-wrap: wrap">
            <div style="flex: 1">
              <p>
                <strong>Número de referencia: </strong>
                {{ article.numRefInter }}
              </p>
              <p>
                <strong>Otra número de referencia: </strong>
                {{ article.otherRef }}
              </p>
              <p><strong>Tipo de objeto: </strong> {{ article.objectType }}</p>
              <p>
                <strong>Tipo de adquisición: </strong>
                {{ article.acquisitionType }}
              </p>
              <p>
                <strong>Estado de conservación: </strong>
                {{ article.conservationStatus }}
              </p>
            </div>
            <div style="flex: 1">
              <p><strong>Estado legal: </strong> {{ article.legalStatus }}</p>
              <p><strong>Localización: </strong> {{ article.location }}</p>
              <p><strong>Fragmentado: </strong> {{ article.fragmented }}</p>
              <p><strong>Réplica: </strong> {{ article.replica }}</p>
              <p><strong>Donador: </strong> {{ donor.name }}</p>
            </div>
          </div>
          <p>
            <strong>Rasgos distintivos: </strong>
            {{ article.distinguishingFeature }}
          </p>
        </div>

        <!-- Product Detail Accordian Start -->
        <div id="accordionExample" class="accordion">
          <!-- Accordion Start -->
          <div class="accordion-item">
            <h2 id="headingOne" class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Código QR
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div
                  class="banner"
                  style="display: flex; justify-content: center"
                >
                  <img
                    :src="qrCodeSrc"
                    alt="Código QR generado con la dirección web actual"
                    style="width: 250px; height: 250px"
                  />
                </div>
                <br />
                <div style="text-align: center">
                  <button
                    class="btn-outline font-md text-center"
                    @click="downloadQRCode"
                  >
                    Descargar QR
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Accordion End -->

          <!-- Accordion Start -->
          <div class="accordion-item">
            <h2 id="headingTwo" class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Historia del artículo
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <br />
                <p>
                  <strong>Materiales: </strong>
                  {{ history.materials }}
                </p>
                <br />
                <p>
                  <strong>Técnicas de manufactura: </strong>
                  {{ history.manufacturing }}
                </p>
                <br />
                <p>
                  <strong>Inscripción de marcas: </strong>
                  {{ history.inscripsionMarcas }}
                </p>
                <br />
                <p>
                  <strong>Antigüedad: </strong>
                  {{ history.antiquity }}
                </p>
                <br />
                <p>
                  <strong>Historia: </strong>
                  {{ history.history }}
                </p>
              </div>
            </div>
          </div>
          <!-- Accordion End -->

          <!-- Accordion Start -->
          <div class="accordion-item">
            <h2 id="headingThree" class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Características del artículo
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <br />
                <div style="display: flex; flex-wrap: wrap">
                  <div style="flex: 1">
                    <p>
                      <strong>Ancho: </strong>
                      {{ article.width }} {{ article.measureWidth }}
                    </p>
                    <p>
                      <strong>Alto: </strong>
                      {{ article.height }} {{ article.measureHeight }}
                    </p>
                  </div>
                  <div style="flex: 1">
                    <p>
                      <strong>Largo: </strong>
                      {{ article.lenght }} {{ article.measureLenght }}
                    </p>
                    <p>
                      <strong>Diámetro: </strong>
                      {{ article.diameter }} {{ article.measureDiameter }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Accordion End -->
        </div>
        <!-- Product Detail Accordian End -->
      </div>
      <!-- Product Detail End -->
    </section>
    <!-- Product Section Section End -->

    <!-- Product Review Section Start -->
    <section class="product-review pb-0">
      <div class="top-content">
        <h3 class="title-color">Donador</h3>
      </div>
      <div class="review-wrap">
        <div class="review-box">
          <div class="media">
            <div v-if="donor.status == 'A'">
              <span class="badge bg-success text-uppercase mb-2">{{
                donor.statusDescription
              }}</span>
            </div>
            <div v-if="donor.status == 'I'">
              <span class="badge bg-danger text-uppercase mb-2">{{
                donor.statusDescription
              }}</span>
            </div>
            <div class="media-body">
              <h4 class="font-sm title-color">{{ donor.name }}</h4>
              <div class="rating">
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
              </div>
            </div>
          </div>
          <p class="font-sm content-color">
            <strong>Cédula: </strong>
            {{ donor.identification }}
          </p>
          <p class="font-sm content-color">
            <strong>Correo electrónico: </strong>
            {{ donor.email }}
          </p>
          <p class="font-sm content-color">
            <strong>Teléfono: </strong>
            {{ donor.phone }}
          </p>
          <p class="font-sm content-color">
            <strong>Dirección: </strong>
            {{ donor.description }}
          </p>
        </div>
      </div>
    </section>
    <!-- Product Review Section End -->
  </main>
  <!-- Main End -->
</template>
<script>
import Articles from '../../services/ArticleService'
import Histors from '../../services/HistoryService'
import Donors from '../../services/Donor'
import GoBack from '../../components/GoBack.vue'
import { saveAs } from 'file-saver'
export default {
  name: 'ArticleDetails',
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
      List: [],
      searchTerm: '',
      originalList: [],
      imageUrl: 'images/museo/frontPage.png', // Ruta relativa de la imagen desde la carpeta public
      imageAlt: 'Descripción de la imagen',
      qrCodeSrc: '',
      article: {
        id: '',
        numRefInter: '',
        otherRef: '',
        name: '',
        title: '',
        objectType: '',
        acquisitionType: '',
        width: '',
        measureWidth: '',
        height: '',
        measureHeight: '',
        lenght: '',
        measureLenght: '',
        diameter: '',
        measureDiameter: '',
        weight: '',
        measureWeight: '',
        conservationStatus: '',
        legalStatus: '',
        value: '',
        distinguishingFeature: '',
        location: '',
        fragmented: '',
        replica: '',
        cedulaDonor: '',
      },
      history: {
        id: '',
        materials: '',
        manufacturing: '',
        inscripsionMarcas: '',
        antiquity: '',
        history: '',
        itemId: '',
      },
      donor: [],
    }
  },
  async mounted() {
    await Articles.getArticles().then((data) => {
      console.log(data)
      this.List = data
      this.originalList = this.List
      console.log(this.originalList)
    })
    // Generamos el código QR con la dirección web actual
    const currentUrl = encodeURIComponent(window.location.href)
    this.qrCodeSrc = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${currentUrl}`

    await Articles.getArticle(this.id).then((data) => {
      this.list = data
      var event = this.list[0]
      console.log(data)
      ;(this.article.id = event.id),
        (this.article.numRefInter = event.numRefInter),
        (this.article.otherRef = event.otherRef),
        (this.article.name = event.name),
        (this.article.title = event.title),
        (this.article.objectType = event.objectTypeDescription),
        (this.article.acquisitionType = event.acquisitionTypeDescription),
        (this.article.width = event.width),
        (this.article.measureWidth = event.measureWidth),
        (this.article.height = event.height),
        (this.article.measureHeight = event.measureHeight),
        (this.article.lenght = event.lenght),
        (this.article.measureLenght = event.measureLenght),
        (this.article.diameter = event.diameter),
        (this.article.measureDiameter = event.measureDiameter),
        (this.article.weight = event.weight),
        (this.article.measureWeight = event.measureWeight),
        (this.article.conservationStatus = event.conservationStatusDescription),
        (this.article.legalStatus = event.legalStatusDescription),
        (this.article.value = event.value),
        (this.article.distinguishingFeature = event.distinguishingFeature),
        (this.article.location = event.location),
        (this.article.fragmented = event.fragmented),
        (this.article.replica = event.replica),
        (this.article.cedulaDonor = event.cedulaDonor)
    })
    await Histors.getHistoryByArticle(this.article.id).then((data) => {
      this.listHistory = data
      console.log(data)
      var event = this.listHistory[0]
      ;(this.history.id = event.id),
        (this.history.materials = event.materials),
        (this.history.manufacturing = event.manufacturing),
        (this.history.inscripsionMarcas = event.inscripsionMarcas),
        (this.history.antiquity = event.antiquity),
        (this.history.history = event.history),
        (this.history.itemId = event.itemId)
    })

    console.log(this.article.cedulaDonor)
    await Donors.getDetailsByCedula(this.article.cedulaDonor).then((data) => {
      console.log(data)
      this.donor = data
    })
    console.log(this.donor)
  },
  methods: {
    downloadQRCode() {
      fetch(this.qrCodeSrc)
        .then((res) => res.blob())
        .then((blob) => saveAs(blob, 'my-qr-code.png'))
    },
    goBack() {
      this.$router.push({ name: 'ArticleView' })
    },
  },
}
</script>
