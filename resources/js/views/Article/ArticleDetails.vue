<template>
  <!-- Main Start -->
  <header class="header">
    <div class="logo-wrap">
      <GoBack></GoBack>
    </div>
  </header>
  <main class="main-wrap product-page mb-xxl">
    <!-- Banner Section Start -->
    <div class="banner-box product-banner">
      <div class="banner" style="display: flex; justify-content: center">
        <div>
          <img
            :src="imageUrl"
            :alt="imageAlt"
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
          <p>
                <strong>Descripción: </strong>
                {{ article.description }}
              </p>
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
              <p>
                <strong>Valor: </strong> {{ article.value }}
                {{ article.typeCoin }}
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
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                  "
                >
                  <div ref="qr-code" class="qr-code">

         
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
          <div class="accordion-item">
            <h2 id="headingThree" class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Restauraciones del artículo
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <br />
                <div
                  style="
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                  "
                >
                  <div
                    v-if="ListRestauration.length !== 0"
                    class="offer-section pt-0"
                  >
                    <div class="offer">
                      <div
                        v-for="item in ListRestauration"
                        :key="item.id"
                        class="offer-wrap"
                      >
                        <div class="product-list media">
                          <div class="media-body">
                            <a class="font-sm">
                              Artículo: {{ item.articles.name }}
                            </a>
                            <br />
                            <span class="content-color font-xs"
                              >Enviado a restauración: {{ item.dateSend }}
                            </span>
                            <br />
                            <span class="content-color font-xs"
                              >Encargado de realizar la restauración:
                              {{ item.inChargeRestauration }}</span
                            >
                            <br />
                            <span class="content-color font-xs"
                              >Lugar donde se realiza la restauración:
                              {{ item.placeRestauration }}</span
                            >
                            <br />
                            <span class="content-color font-xs"
                              >Costo: {{ item.cost }}</span
                            >
                            <br />
                            <span class="content-color font-xs"
                              >Usuario que autorizó:
                              {{ item.userAutorizedSend }}</span
                            >
                            <br /><br />
                            <span class="title-color font-sm"
                              >{{ item.statusDescription }}
                              <span
                                class="badges-round bg-theme-theme font-xs"
                                >{{ item.detailsSend }}</span
                              >
                              <span class="plus-minus">
                                <div>
                                  <router-link
                                    class="btn-outline font-md text-center"
                                    :to="{
                                      name: 'RestaurationDetails',
                                      params: { id: item.id },
                                    }"
                                    >Detalle</router-link
                                  >
                                </div>
                              </span>
                              <span class="plus-theme"
                                ><i data-feather="plus"></i> </span
                            ></span>
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                  <p v-else><strong>No posee restauraciones.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Product Detail Accordian End -->
      </div>
      <!-- Product Detail End -->
    </section>
    <!-- Product Section Section End -->

    <!-- Product Review Section Start -->
    <section v-if="donor.length != 0" class="product-review pb-0">
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
import Files from '../../services/FileService'
import GoBack from '../../components/GoBack.vue'
import Restaurations from '../../services/RestaurationService'
import { saveAs } from 'file-saver'
import Logout from '../../services/Logout.js'
import html2canvas from 'html2canvas'
import qrcode from 'qrcode-generator'


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
      imageUrl: '', // Ruta relativa de la imagen desde la carpeta public
      imageAlt: '',
      qrCodeSrc: '',
      article: {
        id: '',
        numRefInter: '',
        otherRef: '',
        name: '',
        title: '',
        description: '',
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
        typeCoin: '',
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
      ListRestauration: [],
    }
  },

  async mounted() {
    try {
      await this.getArticle()
      this.renderQRCode()
      await this.getHistory()
      await this.getImages()
      await this.getAuthentication()
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    downloadQRCode() {
      const qrCode = this.$refs['qr-code']
      html2canvas(qrCode, { useCORS: true }).then((canvas) => {
        canvas.toBlob((blob) => {
          const file = new File([blob], `${this.article.name}.png`, {
            type: 'image/png',
            lastModified: Date.now(),
          })
          saveAs(file)
        })
      })
    },

    renderQRCode() {
      var typeNumber = 4;
      var errorCorrectionLevel = 'L';
      var qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData(window.location.href);
      qr.make();
      const imdTag =  qr.createImgTag(7, 4, 4);
      const name = this.article.name;
      const img = document.createElement('img');
      const nameTag = document.createElement('p');
      nameTag.className = 'qr-text';

      nameTag.textContent = name;
      img.src = imdTag;
      img.alt = `QR del artículo ${name}`;
      img.width = 250;
      img.height = 250;

      this.$refs['qr-code'].innerHTML = imdTag
      this.$refs['qr-code'].appendChild(nameTag);
    },

    goBack() {
      this.$router.push({ name: 'ArticleView' })
    },
    async getArticle() {
      const article = await Articles.getArticle(this.id)
      this.list = article[0]
      this.article = {
        ...this.list,
        acquisitionType: article.acquisitionTypeDescription,
        conservationStatus: article.conservationStatusDescription,
        legalStatus: article.legalStatusDescription,
      }
    },



    async getHistory() {
      const history = await Histors.getHistoryByArticle(this.article.id)
      this.listHistory = history
      const listHistory = this.listHistory[0]
      this.history = { ...listHistory }
    },

    async getAuthentication() {      
      const data = await Logout.getisAuth()
      if (data.isAuth) {
        if (this.article.cedulaDonor != null) {
        const donor = await Donors.getDetailsByCedula(this.article.cedulaDonor)
        this.donor = donor
        const list = await Restaurations.getRestaurationsByArticle(this.id)
        this.ListRestauration = list
        }
      }
    },
    async getImages() {
      const img = await Files.getImageByIdArticle(this.id)
      const frontpageStr = '/images/museo/frontPage.png'
      this.imageUrl = img === 'null' ? frontpageStr : '/' + img.filePath
      this.imageAlt = img === 'null' ? 'Imagen de muestra' : img.fileName
    },
  },
}
</script>

<style>
.qr-code {
  width: 300px;
    height: 330px;
    display: flex;
    padding: 20px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.qr-text {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>
