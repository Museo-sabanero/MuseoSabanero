<template>
  <div class="search-box">
    <div>
      <i class="iconly-Search icli search"></i>
      <input
        v-model="searchTerm"
        class="form-control"
        type="search"
        placeholder="Buscar por nombre, #id o fecha"
        @input="filterData()"
      />
      <i class="iconly-Download icli mic" @click="downloadExcel"></i>
    </div>
  </div>
  <br />
  <main
    v-for="item in List"
    :key="item.id"
    class="main-wrap order-history mb-4"
  >
    <div class="tab-content ratio2_1">
      <div class="tab-pane fade show active">
        <!-- Order Box Start -->
        <div class="order-box">
          <div>
            <a href="javascript:void(0)" >
              <div class="row d-flex justify-content-between">
                <div class="col-3">
                  <h4 class="title-color font-sm">
                    #
                    <span class="content-color font-theme"
                      >{{ item.id }}
                    </span>
                  </h4>
                </div>
                <div class="col-6">
                  <h4 class="title-color font-sm">
                    <span
                      class="font-sm color-title d-inline-block text-truncate"
                      style="max-width: 250px; white-space: nowrap;"
                      >Fecha: <span class="font-theme">{{ item.fecha }}</span> 
                    </span>
                  </h4>
                </div>
                <div class="col-3 d-grid grap-2">
                  <router-link
                    class="font-xl text-end"
                    :to="{
                      name: 'DetailsBitacora',
                      params: { id: item.id },
                    }"
                    ><i class="iconly-More-Square icli"> </i>
                  </router-link>
                </div>
              </div>
              <div class="row">
                <h4 class="title-color font-sm">
                  <span
                    class="font-sm color-title d-inline-block text-truncate"
                    style="max-width: 250px; white-space: nowrap"
                    >Articulo #{{ (item.id_articulo) }}: {{ item.elemento }}
                  </span>
                </h4>
              </div>

              <div class="row d-flex justify-content-between">
                <div class="col-4">
                  <p class="font-xs content-color">Usuario: {{ item.usuario }}</p>
                </div>
                <div class="col-4">
                  <span
                    class="content-color font-xs d-inline-block text-truncate"
                    style="max-width: 190px; white-space: nowrap"
                    >
                    <span v-if="item.status == 'A'">
                      Estado: Activo
                    </span>
                    <span v-if="item.status == 'I'">
                      Estado: Inactivo
                    </span>
                  </span>
                </div>
                <div class="col-4">
                  <span
                    class="content-color font-xs d-inline-block text-truncate"
                    style="max-width: 120px; white-space: nowrap"
                    >Nota: {{ item.nota }}
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- Order Box End -->
      </div>
    </div>
  </main>
  <br /><br /><br /><br />
</template>
  
<script>
import Bitacora from '../../services/BitacoraService';
import { ExportarExcel } from './ExportarExcel';


export default {
  name: 'Bitacora',
  components: {
    Bitacora,
  },
  data() {
    return {
      List: [],
      originalList: [],
      searchTerm: '',
    }
  },
  async mounted() {
    await Bitacora.getBitacora().then((data) => {
      this.List = data
      this.originalList = this.List
    })
  },
  methods: {
    filterData() {
      const searchTerm = this.searchTerm.toLowerCase()
      if (searchTerm === '') {
        // Si la barra de búsqueda está vacía, se restaura la lista original
        this.List = [...this.originalList]
      } else {
        const expression = new RegExp(searchTerm, 'i')
        this.List = this.originalList.filter(
          (item) =>
            expression.test(item.elemento) || expression.test(`#${item.id}`) || expression.test(`#${item.id_articulo}`) || expression.test(item.fecha)
        )
      }
    },
    async downloadExcel() {
      try {
      const excelBlob = await ExportarExcel(this.List);
      const blob = new Blob([excelBlob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Bitacora.xlsx');
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
      } catch (error) {
        console.error('Error en la función downloadExcel:', error);
      }
      
    },
  },
}
</script>
  