<template>
  <header class="header">
    <div class="logo-wrap">
      <GoBack></GoBack>
    </div>
  </header>
  <main class="main-wrap about-us-page mb-xxl">
    <!-- How do I order? Section Start -->
    <section class="how-do-section pt-0">
      <h3 class="font-theme font-md">Registrar articulo:</h3>
      <form class="custom-form" @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-md-6">
            <InputArticleForm
              id="numRefInter"
              v-model="formData.numRefInter"
              title="Numero de Registro"
              icon="bx bx-barcode"
              placeholder="Numero de Registro"
              :required="true"
            />
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="otherRef"
              v-model="formData.otherRef"
              title="Otra referencia"
              icon="bx bx-expand-alt"
              placeholder="Otra referencia"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="name"
              v-model="formData.name"
              title="Nombre"
              placeholder="Nombre"
              icon="bx bxs-rename"
              :required="true"
            />
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="title"
              v-model="formData.title"
              title="Título"
              icon="bx bxs-pen"
              :required="false"
            />
          </div>
          <!-- <div class="col-md-6">
            <InputArticleForm
              id="description"
              v-model="formData.description"
              title="Descripcion"
              placeholder="Descripcion"
              icon="bx bxs-rename"
              :required="true"
            />
          </div> -->
          <div class="steps-wrap">
          <div class="steps-box">
            <span> <i class="bx bxs-rename"></i></span>
            <div class="content">
              <h4 class="title-color font-sm">Descripción:</h4>
              <div class="input-box mt-3">
                <textarea
                id="description"
              v-model="formData.description"
                  type="text"
                  placeholder="Descripcion"
                  class="form-control"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <br />
          <div class="col-md-6">
            <InputArticleForm
              id="objectType"
              v-model="formData.objectType"
              title="Tipo de objeto"
              icon="bx bxs-color"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bxs-message-square-add"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Tipo de adquisición:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="acquisitionType"
                      v-model="formData.acquisitionType"
                      class="form-control"
                    >
                      <option value="">Seleccione tipo de adquisición</option>
                      <option value="R">Regalía</option>
                      <option value="D">Donativo</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="width"
              v-model="formData.width"
              title="Ancho"
              icon="bx bx-move-horizontal"
              type="number"
              placeholder="Ancho"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-ruler"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Medida del ancho:</h4>
                  <div class="input-box mt-3">
                    <select id="measureWidth" v-model="formData.measureWidth">
                      <option disabled value="">Elige una medida</option>
                      <option
                        v-for="(distance, index) in distances"
                        :key="index"
                        :value="distance"
                      >
                        {{ distance }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <InputArticleForm
                id="height"
                v-model="formData.height"
                title="Alto"
                icon="bx bx-move-vertical"
                type="number"
                placeholder="Alto"
                :required="false"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-ruler"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Medida del alto:</h4>
                  <div class="input-box mt-3">
                    <select id="measureHeight" v-model="formData.measureHeight">
                      <option disabled value="">Elige una medida</option>
                      <option
                        v-for="(distance, index) in distances"
                        :key="index"
                        :value="distance"
                      >
                        {{ distance }}
                      </option>
                    </select>
                    <p
                      v-if="showErrorHeight && !formData.measureHeight"
                      style="color: red"
                    >
                      Debe seleccionar una unidad de medida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="lenght"
              v-model="formData.lenght"
              title="Largo"
              icon="bx bx-expand-horizontal"
              type="number"
              placeholder="Largo"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-ruler"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Medida del largo:</h4>
                  <div class="input-box mt-3">
                    <select id="measureLenght" v-model="formData.measureLenght">
                      <option disabled value="">Elige una medida</option>
                      <option
                        v-for="(distance, index) in distances"
                        :key="index"
                        :value="distance"
                      >
                        {{ distance }}
                      </option>
                    </select>
                    <p
                      v-if="showErrorLenght && !formData.measureLenght"
                      style="color: red"
                    >
                      Debe seleccionar una unidad de medida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="diameter"
              v-model="formData.diameter"
              title="Diámetro"
              icon="bx bx-cross"
              type="number"
              placeholder="Diámetro"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-ruler"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Medida del diámetro:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="measureDiameter"
                      v-model="formData.measureDiameter"
                    >
                      <option disabled value="">Elige una medida</option>
                      <option
                        v-for="(distance, index) in distances"
                        :key="index"
                        :value="distance"
                      >
                        {{ distance }}
                      </option>
                    </select>
                    <p
                      v-if="showErrorDiameter && !formData.measureDiameter"
                      style="color: red"
                    >
                      Debe seleccionar una unidad de medida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="weight"
              v-model="formData.weight"
              title="Peso"
              icon="bx bx-math"
              type="number"
              placeholder="Peso"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-ruler"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Medida del peso:</h4>
                  <div class="input-box mt-3">
                    <select id="measureWeight" v-model="formData.measureWeight">
                      <option disabled value="">Elige una medida</option>
                      <option
                        v-for="(weight, index) in weights"
                        :key="index"
                        :value="weight"
                      >
                        {{ weight }}
                      </option>
                    </select>
                    <p
                      v-if="showErrorWeight && !formData.measureWeight"
                      style="color: red"
                    >
                      Debe seleccionar una unidad de medida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-question-mark"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Estado de conservación:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="estado_conserv"
                      v-model="formData.conservationStatus"
                      class="form-control"
                    >
                      <option value="">
                        Seleccione estado de conservación
                      </option>
                      <option value="B">Bueno</option>
                      <option value="R">Regular</option>
                      <option value="M">Malo</option>
                    </select>
                    <p
                      v-if="
                        showErrorConservationStatus &&
                        !formData.conservationStatus
                      "
                      style="color: red"
                    >
                      Debe seleccionar estado de conservación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span><i class="bx bx-question-mark"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Estado legal:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="legalStatus"
                      v-model="formData.legalStatus"
                      class="form-control"
                    >
                      <option value="">Seleccione estado legal</option>
                      <option value="P">Prestamo</option>
                      <option value="D">Donado</option>
                      <option value="M">Propio del museo</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="value"
              v-model="formData.value"
              title="Valor (Si no tiene un valor coloque un 0)"
              icon="bx bx-money"
              type="number"
              placeholder="Valor"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-coin"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Tipo de moneda:</h4>
                  <div class="input-box mt-3">
                    <select id="typeCoin" v-model="formData.typeCoin">
                      <option disabled value="">Elige una moneda</option>
                      <option
                        v-for="currency in currencies"
                        :key="currency.value"
                        :value="currency.value"
                        class="form-control"
                      >
                        {{ currency.label }}
                      </option>
                    </select>
                    <p
                      v-if="showErrorCurrency && !formData.typeCoin"
                      style="color: red"
                    >
                      Debe seleccionar un tipo de moneda, si no tiene valor
                      seleccione "No aplica"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="location"
              v-model="formData.location"
              title="Localización"
              icon="bx bx-location-plus"
              type="text"
              placeholder="Localización"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-badge"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Fragmentado:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="fragmented"
                      v-model="formData.fragmented"
                      class="form-control"
                    >
                      <option value="">Seleccione</option>
                      <option value="SI">Si</option>
                      <option value="NO">No</option>
                    </select>
                    <p
                      v-if="showErrorFragmented && !formData.fragmented"
                      style="color: red"
                    >
                      Debe seleccionar fragmentado
                    </p>
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
                  <h4 class="title-color font-sm">Réplica:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="replica"
                      v-model="formData.replica"
                      class="form-control"
                    >
                      <option value="">Seleccione</option>
                      <option value="SI">Si</option>
                      <option value="NO">No</option>
                    </select>
                    <p
                      v-if="showErrorReplica && !formData.replica"
                      style="color: red"
                    >
                      Debe seleccionar réplica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-user"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Donador:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="cedulaDonor"
                      v-model="formData.cedulaDonor"
                      class="form-control"
                    >
                      <option value="">Seleccione el donador</option>
                      <option
                        v-for="donor in donors"
                        :key="donor.identification"
                        :value="donor.identification"
                      >
                        {{ donor.name }}
                      </option>
                    </select>
                    <p
                      v-if="showErrorDonor && !formData.cedulaDonor"
                      style="color: red"
                    >
                      Debe seleccionar un donador
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="steps-wrap">
            <div class="steps-box">
              <span> <i class="bx bx-image"></i></span>
              <div class="content">
                <h4 class="title-color font-sm">Imagen del articulo:</h4>
                <div class="input-box mt-3">
                  <div v-if="imageUrl">
                    <img
                      :src="imageUrl"
                      style="max-width: 500px; max-height: 500px"
                    />
                    <input
                      ref="fileInput"
                      type="file"
                      style="display: none"
                      accept=".png, .jpg, .jpeg"
                      @change="handleFileInput"
                    />
                    <br />
                    <br />
                    <button
                      class="btn-solid"
                      style="display: block; margin: 0 auto"
                      @click="openFileInput"
                    >
                      Eliminar imagen
                    </button>
                  </div>
                  <div v-else>
                    <input
                      ref="fileInput"
                      type="file"
                      class="form-control"
                      accept=".png, .jpg, .jpeg"
                      @change="handleFileInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="steps-wrap">
          <div class="steps-box">
            <span> <i class="bx bxs-registered"></i></span>
            <div class="content">
              <h4 class="title-color font-sm">Rasgos distintivos:</h4>
              <div class="input-box mt-3">
                <textarea
                  id="distinguishingFeature"
                  v-model="formData.distinguishingFeature"
                  type="text"
                  placeholder="Rasgos distintivos"
                  class="form-control"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 class="font-theme font-md">Registrar Historia:</h3>
        <div class="row">
          <div class="col-md-6">
            <InputArticleForm
              id="materials"
              v-model="history.materials"
              title="Materiales"
              icon="bx bxs-customize"
              type="text"
              placeholder="Materiales"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="manufacturing"
              v-model="history.manufacturing"
              title="Técnicas de manufactura"
              icon="bx bx-list-minus"
              type="text"
              placeholder="Técnicas de manufactura"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="inscripsionMarcas"
              v-model="history.inscripsionMarcas"
              title="Inscripción de marcas"
              icon="bx bx-bookmark-plus"
              type="text"
              placeholder="Inscripción de marcas"
              :required="false"
            />
          </div>
          <div class="col-md-6">
            <InputArticleForm
              id="antiquity"
              v-model="history.antiquity"
              title="Antigüedad"
              icon="bx bx-history"
              type="text"
              placeholder="Antigüedad"
              :required="false"
            />
          </div>
        </div>
        <div class="steps-wrap">
          <InputArticleForm
            id="history"
            v-model="history.history"
            title="Historia"
            icon="bx bx-library"
            type="text"
            placeholder="Historia"
            :required="false"
          />
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
      </form>
    </section>
    <!-- How do I order? Section End -->
  </main>
</template>

<script>
import Donors from '../../../services/Donor'
import GoBack from '../../../components/GoBack.vue'
import InputArticleForm from './InputArticleForm.vue'
import { data } from './articleModule'
import { handleSubmit, clearData } from './articleModule'

export default {
  name: 'ArticleRegister',
  components: {
    GoBack,
    InputArticleForm,
  },
  data() {
    return { ...data }
  },
  mounted() {
    Donors.getDonors().then((data) => {
      this.donors = data
    })
  },
  methods: {
    handleSubmit,
    clearData,
    goBack() {
      this.$router.push({ name: 'Event' })
    },
    handleDrop(e) {
      e.preventDefault()
      this.file = e.dataTransfer.files[0]
      this.previewImage()
    },
    handleFileInput() {
      this.file = this.$refs.fileInput.files[0]
      this.previewImage()
    },
    openFileInput() {
      //this.$refs.fileInput.click()
      ;(this.file = null), (this.imageUrl = null)
    },
    previewImage() {
      if (!this.file) return
      const reader = new FileReader()
      reader.onload = (e) => {
        this.imageUrl = e.target.result
      }
      reader.readAsDataURL(this.file)
    },
  },
}
</script>
