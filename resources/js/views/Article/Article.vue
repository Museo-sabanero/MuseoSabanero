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
        <div v-for="item in List" :key="item.id" class="offer-wrap">
          <div class="product-list media">
            <div class="media-body">
              <div class="text-center">
                <h5 class="font-theme">{{ item.title }}</h5>
              </div>
              <br /><br />
              <p class="card-text">Nombre: {{ item.name }}</p>
              <a class="font-sm">
                Número de referencia: {{ item.numRefInter }}
              </a>
              <br /><br />
              <div>
                <router-link
                  class="btn btn-outline font-md d-inline-block"
                  :to="{ name: 'ArticleUpdate', params: { id: item.id } }"
                  style="margin-right: 10px"
                >
                  Editar
                </router-link>
                <router-link
                  class="btn btn-outline font-md d-inline-block"
                  :to="{ name: 'ArticleDetails', params: { id: item.id } }"
                >
                  Detalles
                </router-link>
              </div>
              <span class="plus-minus">
                <div
                  class="text-center"
                  style="max-width: 200px; margin: 0 auto"
                >
                  <img
                    :src="item.imageUrl"
                    class="d-block mx-auto rounded"
                    style="max-width: 100%; height: auto; object-fit: cover"
                    :alt="item.imageAlt"
                  />
                </div>
              </span>
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Articles from '../../services/ArticleService'
import Files from '../../services/FileService'

export default {
  name: 'ArticleView',
  data() {
    return {
      List: [],
      searchTerm: '',
      originalList: [],
    }
  },
  async mounted() {
    await Articles.getArticles().then(async (data) => {
      console.log(data)
      this.List = data.map((item) => {
        return {
          ...item,
          imageUrl: null,
          imageAlt: null,
        }
      })
      for (const item of this.List) {
        await Files.getImageByIdArticle(item.id).then((data) => {
          if (data == 'null') {
            ;(item.imageUrl = '/images/museo/frontPage.png'), // Ruta relativa de la imagen desde la carpeta public
              (item.imageAlt = 'Imagen de muestra')
          } else {
            ;(item.imageUrl = '/storage/' + data.filePath),
              (item.imageAlt = data.fileName)
          }
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
            expression.test(item.name) ||
            expression.test(item.title) ||
            expression.test(item.numRefInter)
        )
      }
    },
  },
}
</script>
