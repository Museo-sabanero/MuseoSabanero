<template>
  <main class="main-wrap index-page mb-xxl">
    <!-- Search Box Start -->
    <div class="search-box">
      <i class="iconly-Search icli search"></i>
      <input
        v-model="searchTerm"
        class="form-control"
        type="search"
        placeholder="Buscar por nombre de artículo o detalle de restauración"
        @input="filterData()"
      />
    </div>
    <!-- Search Box End -->
    <br /><br />
    <section class="offer-section pt-0">
      <div class="offer">
        <div class="top-content">
          <div>
            <h4 class="title-color">Restauraciones</h4>
          </div>
          <router-link to="/restauration/register" class="font-theme">
            Registrar
          </router-link>
        </div>

        <div v-for="item in List" :key="item.id" class="offer-wrap">
          <div class="product-list media">
            <div class="media-body">
              <a class="font-sm"> Artículo: {{ item.articles.name }} </a>
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
              <span class="content-color font-xs">Costo: {{ item.cost }}</span>
              <br />
              <span class="content-color font-xs"
                >Usuario que autorizó: {{ item.userAutorizedSendName }}</span
              >
              <br /><br />
              <span class="title-color font-sm"
                >{{ item.statusDescription }}
                <span class="badges-round bg-theme-theme font-xs">{{
                  item.detailsSend
                }}</span>
                <span class="plus-minus">
                  <div>
                    <router-link
                      class="btn-outline font-md text-center"
                      :to="{
                        name: 'RestaurationUpdate',
                        params: { id: item.id },
                      }"
                      >Editar</router-link
                    >
                    <div v-if="item.status === 'E'">
                      <br />
                      <router-link
                        class="btn btn-outline font-md d-inline-block"
                        :to="{
                          name: 'RestaurationApprove',
                          params: { id: item.id },
                        }"
                      >
                        Recibir
                      </router-link>
                    </div>
                    <br />
                    <router-link
                      class="btn btn-outline font-md d-inline-block"
                      :to="{
                        name: 'RestaurationDetails',
                        params: { id: item.id },
                      }"
                    >
                      Detalles
                    </router-link>
                  </div>
                </span>
                <span class="plus-theme"><i data-feather="plus"></i> </span
              ></span>
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Restaurations from '../../services/RestaurationService'
import User from '../../services/User'

export default {
  name: 'RestaurationView',
  data() {
    return {
      List: [],
      searchTerm: '',
      originalList: [],
    }
  },
  async mounted() {
    await Restaurations.getRestaurations().then(async (data) => {
      this.List = data
      this.List = data.map((item) => {
        return {
          ...item,
          userAutorizedSendName: null,
        }
      })
      for (const item of this.List) {
        await User.getUserbyId(item.userAutorizedSend).then((data) => {
          item.userAutorizedSendName = data.name
        })
      }
      this.originalList = this.List
    })
  },
  methods: {
    filterData() {
      const searchTerm = this.searchTerm.toLowerCase()
      if (searchTerm === '') {
        this.List = [...this.originalList]
      } else {
        const expression = new RegExp(searchTerm, 'i')
        this.List = this.originalList.filter(
          (item) =>
            expression.test(item.articles.name) ||
            expression.test(item.detailsSend)
        )
      }
    },
  },
}
</script>
