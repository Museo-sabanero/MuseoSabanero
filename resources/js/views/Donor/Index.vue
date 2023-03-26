<template>
  <div class="search-box">
    <div>
      <i class="iconly-Search icli search"></i>
      <input
        class="form-control"
        type="search"
        placeholder="Buscar por nombre o cédula"
        v-model="searchTerm"
        @input="filterData()"
      />
      <i class="iconly-Voice icli mic"></i>
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
          <div class="media">
            <a href="javascript:void(0)" class="content-box">
              <div class="d-flex justify-content-between mb-3">
                <div>
                  <h4 class="title-color font-sm ">Cédula: <span class="content-color font-theme"
                    >{{ item.identification }}
                  </span></h4>
                 
                </div>
                <div>
                  <h4 class="title-color font-sm ms-3">
                    Estado:
                    <span
                      v-if="item.status === 'A'"
                      class="badge bg-success text-uppercase"
                      >{{ item.statusDescription }} </span
                    ><span
                      v-if="item.status === 'I'"
                      class="badge bg-danger text-uppercase"
                      >{{ item.statusDescription }}
                    </span>
                  </h4>
                </div>
              </div>
              <p class="font-xs content-color mb-2">Nombre: {{ item.name }}</p>
              <span
                class="content-color font-xs d-inline-block text-truncate mb-2"
                style="max-width: 190px; white-space: nowrap"
                >Dirección: {{ item.description }}</span
              >
            </a>
            <div class="order-id-section section-p-tb">
              <div class="media mt-4">
                <div class="media-body">
                  <h2 class="font-sm color-title">Fecha registro:</h2>
                </div>
              </div>
              <div class="media mt-2">
                <span><i class="iconly-Calendar icli"></i></span>
                <div class="media-body">
                  <span class="content-color font-theme"
                    >{{ item.dateCreated }}
                  </span>
                </div>
              </div>
            </div>
            <div class="media-body">
              <!-- <img
                  src="/images/avatar/avatar.jpg"
                  alt="map"
                  class="rounded-circle bg-secondary"
                  style="max-width: 80px; max-height: 60px"
                /> -->
            </div>
          </div>
          <div class="d-grid grap-2">
            <router-link
              class="btn-outline font-md text-center"
              :to="{
                name: 'DetailsDonor',
                params: { id: item.id },
              }"
              >Detalle</router-link
            >
            <!-- <a class="btn-outline font-md text-center"
                  >Detalle</a
                > -->
          </div>
        </div>
        <!-- Order Box End -->
      </div>
    </div>
  </main>
  <br /><br /><br /><br />
</template>
    <script>
import Donors from '../../services/Donor'

export default {
  name: 'IndexDonor',
  components: {
    Donors,
  },
  data() {
    return {
      List: [],
      originalList: [],
      searchTerm: '',
    }
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
            expression.test(item.name) || expression.test(item.identification)
        )
      }
    },
  },
  async mounted() {
    await Donors.getDonors().then((data) => {
      console.log(data)
      this.List = data
      this.originalList = this.List
    })
  },
}
</script>
    