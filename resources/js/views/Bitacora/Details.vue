<template>
  <!-- Main Start -->
  <header class="header">
    <div class="logo-wrap">
      <GoBack></GoBack>
    </div>
  </header>
  <main class="main-wrap product-page mb-xxl">
    <!-- Product Section Section Start -->
    <section class="product-section mt-1">
      <h1 class="font-md">Bitacora</h1>

      <!-- Product Detail Start -->
      <div class="product-detail section-p-t">
        <div class="product-detail-box">
          <h2 class="font-theme">{{ bitacora.elemento }}</h2>
          <br />
          <div style="display: flex; flex-wrap: wrap">
            <div style="flex: 1">
              <p>
                <strong>Id de Bitacora: </strong>
                # {{ bitacora.id }}
              </p>
              <p>
                <strong>Id de Artículo: </strong>
                # {{ bitacora.id_articulo }}
              </p>
              <p>
                <strong>Nota: </strong>
                {{ bitacora.nota }}
              </p>
              <p>
                <strong>Creado por: </strong>
                {{ bitacora.usuario }}
              </p>
            </div>
            <div style="flex: 1">
              <p v-if="bitacora.status == 'A'">
                <strong>Estado: </strong> Activo
              </p>
              <p v-if="bitacora.status == 'I'">
                <strong>Estado: </strong> Inactivo
              </p>
              <p><strong>Fecha: </strong> {{ bitacora.fecha }}</p>
            </div>
          </div>
        </div>

        <div v-if="ListBitacora.length > 1">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                style="color: black; background-color: white"
                @click="toggleAccordion"
              >
                Record de Bitacora ({{ ListBitacora.length }})
              </button>
            </h2>
            <div v-if="isAccordionOpen" class="accordion-body">
              <div style="justify-content: center">
                <div v-if="ListBitacora.length > 1" class="offer-section pt-0">
                  <div class="offer">
                    <div
                      v-for="item in ListBitacora"
                      :key="item.id"
                      class="offer-wrap"
                    >
                      <div class="row product-list media">
                        <div class="row">
                          <div>
                            <div class="col-3">
                              Id de Bitacora: {{ item.id }}
                            </div>
                            <div class="col-3">
                              Id de Artículo: {{ item.id_articulo }}
                            </div>
                            <div class="col-6">
                              Artículo: {{ item.elemento }}
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div>
                            <div class="col-6 content-color font-xs">
                              <span v-if="item.status == 'A'">
                                Estado: Activo
                              </span>
                              <span v-if="item.status == 'I'">
                                Estado: Inactivo
                              </span>
                            </div>
                            <div class="col-6 content-color font-xs">
                              Nota: {{ item.nota }}
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div>
                            <div class="col-6 content-color font-xs">
                              Fecha: {{ item.fecha }}
                            </div>
                            <div class="col-6 content-color font-xs">
                              Creado por: {{ item.usuario }}
                            </div>
                            <br />
                          </div>
                        </div>
                        <br />
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
                <p v-else><strong>No posee otro registro.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Product Detail End -->
    </section>
  </main>
  <!-- Main End -->
</template>
<script>
import Bitacora from '../../services/BitacoraService'
import GoBack from '../../components/GoBack.vue'
export default {
  name: 'DetailsBitacora',
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
      isAccordionOpen: false,
      List: [],
      searchTerm: '',
      originalList: [],
      bitacora: {
        id: '',
        elemento: '',
        usuario: '',
        status: '',
        nota: '',
        fecha: '',
        id_articulo: '',
      },
      ListBitacora: [],
    }
  },
  async mounted() {
    const data = await Bitacora.getDetails(this.id)
    this.bitacora = { ...this.bitacora, ...data[0] }

    const list = await Bitacora.getBitacoraByIdArticulo(
      this.bitacora.id_articulo
    )
    this.ListBitacora = list
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'IndexBitacora' })
    },
    toggleAccordion() {
      this.isAccordionOpen = !this.isAccordionOpen
    },
  },
}
</script>
