<template>
  <main class="main-wrap index-page mb-xxl">
    <!-- Search Box Start -->
    <div class="search-box">
      <i class="iconly-Search icli search"></i>
      <input
        v-model="searchTerm"
        class="form-control"
        type="search"
        placeholder="Buscar por nombre o descripción"
        @input="filterData()"
      />
    </div>
    <!-- Search Box End -->
    <br /><br />
    <section class="offer-section pt-0">
      <div class="offer">
        <div class="top-content">
          <div>
            <h4 class="title-color">Eventos</h4>
          </div>
          <router-link to="/event/register" class="font-theme">
            Registrar
          </router-link>
        </div>

        <div v-for="item in List" :key="item.id" class="offer-wrap">
          <div class="product-list media">
            <div class="media-body">
              <a class="font-sm">
                {{ item.name }}
              </a>
              <br />
              <span class="content-color font-xs"
                >Inicia: {{ item.dateStart }} | Hora: {{ item.time }}
              </span>
              <span class="content-color font-xs"
                >Finaliza: {{ item.dateEnd }}</span
              >
              <span class="content-color font-xs"
                >| Máximo: {{ item.maxPersons }} personas</span
              >
              <br /><br />
              <span class="title-color font-sm"
                >{{ item.cost }}
                <span class="badges-round bg-theme-theme font-xs">{{
                  item.description
                }}</span>
                <span class="plus-minus">
                  <router-link
                    class="btn-outline font-md text-center"
                    :to="{
                      name: 'EventUpdate',
                      params: { id: item.id },
                    }"
                    >Editar</router-link
                  >
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
import Events from '../../services/EventService'

export default {
  name: 'EventView',
  data() {
    return {
      List: [],
      searchTerm: '',
      originalList: [],
    }
  },
  async mounted() {
    await Events.getEvents().then((data) => {
      console.log(data)
      this.List = data
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
            expression.test(item.name) || expression.test(item.description)
        )
      }
    },
  },
}
</script>
