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
            <h4 class="title-color">Articulos</h4>
          </div>
          <router-link to="/article/register" class="font-theme">
            Registrar
          </router-link>
        </div>
        <div v-for="item in List" :key="item.id" style="width: 36rem">
          <div class="card border border-info">
            <img
              src="/images/museo/frontPage.png"
              class="d-block mx-auto rounded my-3"
              style="
                width: 200px;
                height: 200px;
                object-fit: cover;
                margin: 0 auto;
              "
              :alt="imageAlt"
            />
            <div class="card-body">
              <div class="text-center">
                <h5 class="font-theme">{{ item.title }}</h5>
              </div>
              <p class="card-text">Nombre: {{ item.name }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Número de referencia: {{ item.numRefInter }}
              </li>
            </ul>
            <div class="card-body">
              <div class="text-center">
                <router-link
                  class="btn-outline font-md text-center"
                  :to="{
                    name: 'ArticleUpdate',
                    params: { id: item.id },
                  }"
                  >Editar</router-link
                >
              </div>
            </div>
          </div>
          <br /><br />
        </div>
        <!-- <div v-for="item in List" :key="item.id" class="offer-wrap">
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
        </div> -->
      </div>
    </section>
  </main>
</template>
<script>
import Articles from '../../services/ArticleService'

export default {
  name: 'ArticleView',
  data() {
    return {
      List: [],
      searchTerm: '',
      originalList: [],
      imageUrl: 'images/museo/frontPage.png', // Ruta relativa de la imagen desde la carpeta public
      imageAlt: 'Descripción de la imagen',
    }
  },
  async mounted() {
    await Articles.getArticles().then((data) => {
      console.log(data)
      this.List = data
      this.originalList = this.List
      console.log(this.originalList)
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
            expression.test(item.name) ||
            expression.test(item.title) ||
            expression.test(item.numRefInter)
        )
      }
    },
  },
}
</script>
