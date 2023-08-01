<template>
  <header class="header">
    <div class="logo-wrap">
      <GoBack></GoBack>
    </div>
  </header>
  <main class="main-wrap about-us-page mb-xxl">
    <!-- How do I order? Section Start -->
    <section class="how-do-section pt-0">
      <h3 class="font-theme font-md">Editar articulo:</h3>
      <form class="custom-form" @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bxs-spreadsheet"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Número de referencia:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="numRefInter"
                      v-model="formData.numRefInter"
                      type="text"
                      placeholder="Número de referencia"
                      class="form-control"
                     required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-expand-alt"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Otra referencia:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="otherRef"
                      v-model="formData.otherRef"
                      type="text"
                      placeholder="Otra Referencia"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bxs-rename"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Nombre:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      placeholder="Nombre"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bxs-pen"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Título:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="title"
                      v-model="formData.title"
                      type="text"
                      placeholder="Título"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bxs-color"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Tipo de objeto:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="objectType"
                      v-model="formData.objectType"
                      maxlength="200"
                      type="text"

                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
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
                    <p
                      v-if="
                        showErrorAcquisitionType && !formData.acquisitionType
                      "
                      style="color: red"
                    >
                      Debe seleccionar tipo de adquisición
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-move-horizontal"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Ancho:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="width"
                      v-model="formData.width"
                      type="number"
                      placeholder="Ancho"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
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
                    <p
                      v-if="showErrorWidth && !formData.measureWidth"
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
                <span> <i class="bx bx-move-vertical"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Alto:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="height"
                      v-model="formData.height"
                      type="number"
                      placeholder="Alto"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
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
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-expand-horizontal"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Largo:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="lenght"
                      v-model="formData.lenght"
                      type="number"
                      placeholder="Largo"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
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
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-cross"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Diámetro:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="diameter"
                      v-model="formData.diameter"
                      type="number"
                      placeholder="Diámetro"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
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
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-math"></i>></span>
                <div class="content">
                  <h4 class="title-color font-sm">Peso:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="weight"
                      v-model="formData.weight"
                      type="number"
                      placeholder="Peso"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
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
                    <p
                      v-if="showErrorLegalStatus && !formData.legalStatus"
                      style="color: red"
                    >
                      Debe seleccionar estado legal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-money"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">
                    Valor: (Si no tiene un valor coloque un 0)
                  </h4>
                  <div class="input-box mt-3">
                    <input
                      id="value"
                      v-model="formData.value"
                      type="number"
                      placeholder="Valor"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
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

          <div class="steps-wrap">
            <div class="steps-box">
              <span> <i class="bx bx-location-plus"></i></span>
              <div class="content">
                <h4 class="title-color font-sm">Localización:</h4>
                <div class="input-box mt-3">
                  <input
                    id="location"
                    v-model="formData.location"
                    type="text"
                    placeholder="Localización"
                    class="form-control"

                  />
                </div>
              </div>
            </div>
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
        <h3 class="font-theme font-md">Editar Historia:</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bxs-customize"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Materiales:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="materials"
                      v-model="history.materials"
                      type="text"
                      placeholder="Materiales"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-list-minus"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Técnicas de manufactura:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="manufacturing"
                      v-model="history.manufacturing"
                      type="text"
                      placeholder="Técnicas de manufactura"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-bookmark-plus"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Inscripción de marcas:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="inscripsionMarcas"
                      v-model="history.inscripsionMarcas"
                      type="text"
                      placeholder="Inscripción de marcas"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="bx bx-history"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Antigüedad:</h4>
                  <div class="input-box mt-3">
                    <input
                      id="antiquity"
                      v-model="history.antiquity"
                      type="text"
                      placeholder="Antigüedad"
                      class="form-control"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="steps-wrap">
          <div class="steps-box">
            <span> <i class="bx bx-library"></i></span>
            <div class="content">
              <h4 class="title-color font-sm">Historia:</h4>
              <div class="input-box mt-3">
                <textarea
                  id="history"
                  v-model="history.history"
                  type="text"
                  placeholder="Historia"
                  class="form-control"

                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div>
             <a class="btn-solid text-center" 
              type="button" 
              @click="mostrarModal(1)"
              style="margin-top: 20px; width: 100%;">
              Guardar
            </a>                
          </div>
        </div>
        <!-- Modal -->
        <div v-if="mostrar == true">
            <div class="modalNota">
              <div class="card text-center">
                <div class="card-header">
                  <p class="font-theme font-lg">Nota para Bitacora</p>
                </div>
                <div class="card-content">
                  <textarea v-model="nota" rows="15" cols="40" placeholder="Escriba aquí..."></textarea>
                </div>
                <div v-if="tipoModal === 1" class="card-footer text-center">
                   <button type="submit" class="btn-solid w-100">Listo</button>                
                   <div v-if="mostrarErrorNota" style="color: red">¡El campo Nota es requerido!</div>
                </div>
                <div v-if="tipoModal === 2" class="card-footer text-center">
                   <button @click="deleteArticle" class="btn-solid w-100" style="background-color: red;">Listo</button> 
                   <div v-if="mostrarErrorNota" style="color: red">¡El campo Nota es requerido!</div>           
                </div>
              </div>
            </div>
        </div>
      </form>
      <div>
        <a
          type="button"
          class="btn btn-primary w-100"
          style="background-color: red; margin-top: 20px"
          @click="mostrarModal(2)"
          >
          Inactivar Articulo
        </a>
      </div>
    </section>
    <!-- How do I order? Section End -->
  </main>
</template>

<script>
import Articles from '../../services/ArticleService'
import Histors from '../../services/HistoryService'
import Bitacora from '../../services/BitacoraService'
import Files from '../../services/FileService'
import Donors from '../../services/Donor'
import GoBack from '../../components/GoBack.vue'
export default {
  name: 'ArticleUpdate',
  components: {
    GoBack,
  },
  props: {
    id: {
      type: Number,
      required : true,
    },
  },
  data() {
    return {
      mostrar: false,
      nota: '',
      mostrarErrorNota: false,
      tipoModal: 0,
      formData: {
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
      itemId: '',
      showPopup: false,
      file: null,
      imageUrl: null,
      list: [],
      listHistory: [],
      donors: [],
      showErrorDonor: false,
      showErrorAcquisitionType: false,
      showErrorConservationStatus: false,
      showErrorLegalStatus: false,
      showErrorFragmented: false,
      showErrorReplica: false,
      showErrorWidth: false,
      showErrorHeight: false,
      showErrorLenght: false,
      showErrorDiameter: false,
      showErrorWeight: false,
      showErrorCurrency: false,
      weights: [
        'Gramos (g)',
        'Kilogramos (kg)',
        'Onzas (oz)',
        'Libras (lb)',
        'Toneladas (t)',
      ],
      distances: [
        'Milímetros (mm)',
        'Centímetros (cm)',
        'Metros (m)',
        'Pulgadas (in)',
        'Pies (ft)',
      ],
      currencies: [
        { label: 'Colón costarricense', value: 'CRC' },
        { label: 'Dólar estadounidense', value: 'USD' },
        { label: 'Euro', value: 'EUR' },
        { label: 'Dólar canadiense', value: 'CAD' },
        { label: 'Peso mexicano', value: 'MXN' },
        { label: 'No aplica', value: 'N/A' },
      ],
    }
  },
  async mounted() {
    await Donors.getDonors().then((data) => {
      console.log(data)
      this.donors = data
    })

    await Articles.getArticle(this.id).then((data) => {
      this.list = data
      var event = this.list[0]
      console.log(data)
      ;(this.formData.id = event.id),
        (this.formData.numRefInter = event.numRefInter),
        (this.formData.otherRef = event.otherRef),
        (this.formData.name = event.name),
        (this.formData.title = event.title),
        (this.formData.objectType = event.objectType),
        (this.formData.acquisitionType = event.acquisitionType),
        (this.formData.width = event.width),
        (this.formData.measureWidth = event.measureWidth),
        (this.formData.height = event.height),
        (this.formData.measureHeight = event.measureHeight),
        (this.formData.lenght = event.lenght),
        (this.formData.measureLenght = event.measureLenght),
        (this.formData.diameter = event.diameter),
        (this.formData.measureDiameter = event.measureDiameter),
        (this.formData.weight = event.weight),
        (this.formData.measureWeight = event.measureWeight),
        (this.formData.conservationStatus = event.conservationStatus),
        (this.formData.legalStatus = event.legalStatus),
        (this.formData.value = event.value),
        (this.formData.typeCoin = event.typeCoin),
        (this.formData.distinguishingFeature = event.distinguishingFeature),
        (this.formData.location = event.location),
        (this.formData.fragmented = event.fragmented),
        (this.formData.replica = event.replica),
        (this.formData.cedulaDonor = event.cedulaDonor)
    })
    await Histors.getHistoryByArticle(this.formData.id).then((data) => {
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
  },
  methods: {
    mostrarModal(tipo) {
      this.tipoModal = tipo;
      this.mostrar = true;
    },
    handleSubmit() {
      if (!this.formData.acquisitionType) {
        return (this.showErrorAcquisitionType = true)
      }
      if (!this.formData.conservationStatus) {
        return (this.showErrorConservationStatus = true)
      }
      if (!this.formData.legalStatus) {
        return (this.showErrorLegalStatus = true)
      }
      if (!this.formData.fragmented) {
        return (this.showErrorFragmented = true)
      }
      if (!this.formData.replica) {
        return (this.showErrorReplica = true)
      }
      if (!this.formData.cedulaDonor) {
        return (this.showErrorDonor = true)
      }
      if (!this.formData.measureWidth) {
        return (this.showErrorWidth = true)
      }
      if (!this.formData.measureHeight) {
        return (this.showErrorHeight = true)
      }
      if (!this.formData.measureLenght) {
        return (this.showErrorLenght = true)
      }
      if (!this.formData.measureDiameter) {
        return (this.showErrorDiameter = true)
      }
      if (!this.formData.measureWeight) {
        return (this.showErrorWeight = true)
      }
      if (!this.formData.typeCoin) {
        return (this.showErrorCurrency = true)
      }
      if (this.nota.trim() === '') {
        return (this.mostrarErrorNota = true)
      }
      console.log(this.formData)
      const article = {
        id: this.formData.id,
        numRefInter: this.formData.numRefInter,
        otherRef: this.formData.otherRef,
        name: this.formData.name,
        title: this.formData.title,
        objectType: this.formData.objectType,
        acquisitionType: this.formData.acquisitionType,
        width: this.formData.width,
        measureWidth: this.formData.measureWidth,
        height: this.formData.height,
        measureHeight: this.formData.measureHeight,
        lenght: this.formData.lenght,
        measureLenght: this.formData.measureLenght,
        diameter: this.formData.diameter,
        measureDiameter: this.formData.measureDiameter,
        weight: this.formData.weight,
        measureWeight: this.formData.measureWeight,
        conservationStatus: this.formData.conservationStatus,
        legalStatus: this.formData.legalStatus,
        value: this.formData.value,
        typeCoin: this.formData.typeCoin,
        distinguishingFeature: this.formData.distinguishingFeature,
        location: this.formData.location,
        fragmented: this.formData.fragmented,
        replica: this.formData.replica,
        cedulaDonor: this.formData.cedulaDonor,
      }

      console.log(article)
      Articles.updateArticle(article).then((data) => {
        console.log(data)
      })
      const histo = {
        id: this.history.id,
        materials: this.history.materials,
        manufacturing: this.history.manufacturing,
        inscripsionMarcas: this.history.inscripsionMarcas,
        antiquity: this.history.antiquity,
        history: this.history.history,
        itemId: this.history.itemId,
      }

      console.log(histo)
      Histors.updateHistory(histo).then((dataHisto) => {
        console.log(dataHisto)
        console.log(histo)
        // this.$router.push('/article/index')
      })

      const bitacora = {
        name: this.formData.name,
        nota: this.nota,
        status: 'A',
        id_articulo: this.formData.id,
      }

      Bitacora.createBitacora(bitacora).then((dataBitacora) => {
          console.log(dataBitacora)
          console.log(bitacora)
      })

      if (this.file != null) {
        const fileData = new FormData()
        fileData.append('file', this.file)
        fileData.append('elementId', this.formData.id)

        console.log('data')
        console.log(fileData)
        Files.updateFile(fileData).then((dataFile) => {
          console.log(dataFile)
          console.log(fileData)
        })
      }
      this.tipoModal = 0;
      this.mostrar = false;
      this.$router.push('/article/index')
    },
    deleteArticle() {
      if (this.nota.trim() === '') {
        return (this.mostrarErrorNota = true)
      }
      console.log(this.formData)
      const registro = {
        id: this.formData.id,
      }
      const bitacora = {
        name: this.formData.name,
        status: 'I',
        nota: this.nota,
        id_articulo: this.formData.id,
      }
      Bitacora.createBitacora(bitacora).then((dataBitacora) => {
          console.log(dataBitacora)
          console.log(bitacora)
      })
      console.log(registro)

      Articles.deleteArticle(registro).then((data) => {
        console.log(data)
        this.$router.push('/article/index')
      })
      this.mostrar = false
      this.tipoModal = 0
    },
    goBack() {
      this.$router.push({
        name: 'ArticleView',
      })
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
<style>
.modalNota {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

