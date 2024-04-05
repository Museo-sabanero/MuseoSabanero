<template>
  <main class="main-wrap index-page mb-xxl">
    
     
    <div class="search-box">
      <div>
      <i class="iconly-Search icli search"></i>
      <input
        v-model="searchTerm"
        class="form-control"
        type="search"
        placeholder="Buscar por nombre o descripción"
        @input="filterData()"
      />
      </div>
      
    </div>
    <button
          type="button"
          class="btn btn-solid"
          style="padding: 0.5rem 0.3rem 0.5rem 0.3rem"
          @click="exportex"
        >
          <span class="btn-label"><i class="ri-file-excel-2-line"></i></span>
          Exportar Excel
        </button>
        <a
        class="btn btn-solid"
        href="exportPDFArticles"
        style="padding: 0.5rem 0.3rem 0.5rem 0.3rem"
        >
          <span class="btn-label"><i class='bx bxs-file-pdf'></i></span>
          Exportar pdf
        </a>
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
              <span
                class="plus-minus"
                style="
                  border: 1px solid transparent;
                  background-color: transparent;
                "
              >
                <div
                  class="text-center"
                  style="max-width: 200px; margin: 0 auto; border: 1px solid transparent;"
                >
                  <img
                    :src="item.imageUrl"
                    class="d-block mx-auto rounded"
                    style="max-width: 75%; 
                    object-fit: contain;
    display: block;
    height: 150px;
    width: 200px;
    object-position: center center;"
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
import { exportExcel } from '../../exportExcel'

export default {
  name: 'ArticleView',
  data() {
    return {
      List: [],
      searchTerm: '',
      originalList: [],
      items: null,
    }
  },
  async mounted() {
    await Articles.getArticles().then(async (data) => {
      
      this.items = data;
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
            ;(item.imageUrl = '/' + data.filePath),
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
    exportex() {
      const Headers = [
        'Id',
        'Numero de referencia',
        'Otra referencia',
        'Nombre',
        'Titulo',
        'Tipo de objeto',
        'Tipo de adquicision',
        'Ancho',
        'Medida del ancho',
        'Altura',
        'Medida de altura',
        'Largo',
        'Medida del largo',
        'Diametro',
        'Medida del diametro',
        'Estado',
        'Peso',
        'Medida del peso',
        'Estado de conservacion',
        'Estado legal',
        'Valor',
        'Tipo de moneda', 
        'Característica distintiva',
        'Localizacion','Ced donador',
        'Fecha de registro'
        ]
      const columnsToExport = this.items.map(
        ({ legalStatusDescription, codQR, user,acquisitionType, ...rest }) => rest
      )
      exportExcel(
        'Articulos del museo del sabanero',
        'Articulos',
        columnsToExport,
        Headers
      )
    },
    
  },
}
</script>
