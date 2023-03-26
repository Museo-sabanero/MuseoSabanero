<template>
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
              <div class="d-flex justify-content-between mb-2">
                <div>
                  <h4 class="title-color font-sm">Fecha creado</h4>
                  <span class="content-color font-sm"
                    >{{ item.dateCreated }}
                  </span>
                </div>
                <div>
                  <h4 class="title-color font-sm">
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
            <div class="media-body">
              <img
                src="/images/icons/payment.svg"
                alt="map"
                class="rounded-circle bg-secondary"
                style="max-width: 80px; max-height: 60px"
              />
            </div>
          </div>
          <div class="d-grid grap-2">
            <a class="btn-outline font-md text-center">Detalle</a>
          </div>
        </div>
        <!-- Order Box End -->
      </div>
    </div>
  </main>
  <br /><br /><br /><br />
</template>
<script>
import Donors from '../services/Donor'

export default {
  name: 'Donor',
  components: {
    Donors,
  },
  data() {
    return {
      List: [],
    }
  },
  async mounted() {
    await Donors.getDonors().then((data) => {
      console.log(data)
      this.List = data
    })
  },
}
</script>
