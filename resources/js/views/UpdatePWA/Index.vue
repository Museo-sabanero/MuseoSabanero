<template>
    <loader v-if="isLoading" />
    <main class="main-wrap order-history mb-xxl">
      <section class="coupons-section pt-0">
        <div class="coupon-wrap">
          <div class="top-content">
            <div>
              <h4 class="title-color">Version de la aplicación.</h4>
              <p class="content-color"></p>
            </div>
          </div>
  
          <div class="coupon-box coupon-slider">
            <div>
              <div class="cupon bg-white">
                <span class="circle-shape-wrap left">
                  <span class="circle-shape"></span>
                </span>
                <span class="circle-shape-wrap right">
                  <span class="circle-shape"></span>
                </span>
                <div class="img-wrap">
                  <h5 class="title-color font-xs content-color">
                    Versión actual:
                  </h5>
                </div>
                <div class="content-wrap">
                  <span class="font-xs content-color">{{ currentVersion }}</span>
                </div>
              </div>
            </div>
            <div v-if="showUpdate">
              <div class="cupon bg-white">
                <span class="circle-shape-wrap left">
                  <span class="circle-shape"></span>
                </span>
                <span class="circle-shape-wrap right">
                  <span class="circle-shape"></span>
                </span>
                <div class="img-wrap">
                  <h5 class="title-color font-xs content-color">Nueva versión:</h5>
                </div>
                <div class="content-wrap">
                  <span class="content-color">{{ newVersion }}</span>
                </div>
              </div>
            </div>
          </div>
          <br />
  
          <div class="coupon-box coupon-slider">
            <button
              v-if="showUpdate"
              class="btn btn-solid"
              @click="updateApplication"
            >
              Actualizar
            </button>
          </div>
          <br />
          <!-- <div class="coupon-box coupon-slider">
            <div v-if="showUpdate">
              <p>Mejoras:</p>
              <p>
               XXX
              </p>
            </div>
          </div> -->
        </div>
      </section>
    </main>
  </template>
  <script>
import loader from '../../components/loader.vue'
import VersionPWA from '../../services/VersionPWA'
export default {
  components: {
    loader,
  },
  data() {
    return {
      showUpdate: false,
      isLoading: false,
      currentVersion: localStorage.getItem('version'),
      newVersion: '',
    }
  },
  async mounted() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 5000)
    //console.log(localStorage.getItem('version'))
    await VersionPWA.checkVersion().then((data) => {
      
      this.newVersion = data.Version
      console.log(data)
    }).finally(() => {
      this.isLoading = false
    });
    
    
    if (this.currentVersion != this.newVersion) {
      this.showUpdate = true
    }
  },
  methods: {
    updateApplication() {
      window.location.reload()
      localStorage.setItem('version', this.newVersion)
    },
  },
}
</script>