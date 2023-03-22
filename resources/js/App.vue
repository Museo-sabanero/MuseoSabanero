<template>
  <Header @sidebar-show="showSidebar" />
  <div align="center">
    <span
      v-if="isOffline"
      class="badge bg-danger text-uppercase text-center"
      style="width: 100%"
      >{{ message }}</span
    >
    <span
      v-else
      class="badge bg-theme-theme text-uppercase text-center"
      style="width: 100%"
      >{{ message }}</span
    >
  </div>
  <router-view></router-view>
  <Sidebar :sidebar="sidebar" @hide-sidebar="hideSidebar" />
  <!-- <PWAInstaller /> -->
  <Navbar />
</template>
<script>
import Header from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'
import Navbar from './components/layout/Navbar.vue'
/* import PWAInstaller from "./components/PwaInstaller.vue"; */

export default {
  components: {
    Header,
    Sidebar,
    Navbar,
    /* PWAInstaller, */
  },
  data() {
    return {
      sidebar: {
        show: false,
      },
      message: '',
      isOffline: false,
    }
  },
  mounted() {
    window.addEventListener('online', this.checkOnlineStatus)
    window.addEventListener('offline', this.checkOnlineStatus)
  },
  beforeUnmount() {
    window.removeEventListener('online', this.checkOnlineStatus)
    window.removeEventListener('offline', this.checkOnlineStatus)
  },
  methods: {
    showSidebar() {
      this.sidebar.show = true
    },
    hideSidebar() {
      this.sidebar.show = false
    },
    showMessage() {
      if (this.isOffline) {
        this.message = '¡Sin conexión a internet!'
      } else {
        this.message = '¡Vuelves a tener conexión a internet!'
        setTimeout(() => {
          this.message = ''
        }, 5000)
      }
    },
    checkOnlineStatus() {
      this.isOffline = !navigator.onLine
      this.showMessage()
    },
  },
}
</script>
