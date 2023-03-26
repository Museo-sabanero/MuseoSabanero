<template>
  <main class="main-wrap index-page mb-xxl">
    <!-- Search Box Start -->
    <div class="search-box">
      <i class="iconly-Search icli search"></i>
      <input class="form-control" type="search" placeholder="Search here..." />
      <i class="iconly-Voice icli mic"></i>
    </div>
    <!-- Search Box End -->
    <br /><br />
    <section class="offer-section pt-0">
      <div class="offer">
        <div class="top-content">
          <div>
            <h4 class="title-color">Eventos</h4>
          </div>
          <router-link to="/eventRegister" class="font-theme">
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
                }}</span></span
              >
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Events from '../services/EventService'

export default {
  name: 'EventView',
  data() {
    return {
      List: [],
    }
  },
  async mounted() {
    await Events.getEvents().then((data) => {
      console.log(data)
      this.List = data
    })
  },
}
</script>
