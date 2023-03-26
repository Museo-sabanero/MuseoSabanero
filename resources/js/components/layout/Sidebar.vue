<template>
  <a
    href="javascript:void(0)"
    class="overlay-sidebar"
    :class="sidebar && sidebar.show ? 'show' : ''"
    @click="() => $emit('hide-sidebar')"
  ></a>
  <aside class="header-sidebar" :class="sidebar && sidebar.show ? 'show' : ''">
    <div class="wrap">
      <div class="user-panel">
        <div class="media">
          <a href="account.html">
            <img src="/images/avatar/avatar.jpg" alt="avatar"
          /></a>
          <div class="media-body">
            <a class="title-color font-sm"
              >{{ name }}
              <span class="content-color font-xs">Nick: {{ nickName }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Navigation Start -->
      <nav class="navigation">
        <ul>
          <li>
            <router-link to="/home" class="nav-link title-color font-sm">
              <i class="iconly-Graph icli"></i>
              <span>Panel</span>
            </router-link>
            <router-link class="arrow" to="/home"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/donor" class="nav-link title-color font-sm">
              <i class="iconly-Document icli"></i>
              <span>Donaciones</span>
            </router-link>
            <router-link class="arrow" to="/donor"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>

          <li>
            <router-link
              to="/deliveryhistory"
              class="nav-link title-color font-sm"
            >
              <i class="iconly-Calendar icli"></i>
              <span>Historial</span>
            </router-link>
            <router-link class="arrow" to="/home"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/event" class="nav-link title-color font-sm">
              <i class="iconly-Calendar icli"></i>
              <span>Eventos</span>
            </router-link>
            <router-link class="arrow" to="/event"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <a href="javascript:void(0)" class="nav-link title-color font-sm">
              <i class="iconly-Graph icli"></i>
              <span>Dark</span>
            </a>

            <div class="dark-switch">
              <input
                id="darkButton"
                v-model="isDarkMode"
                type="checkbox"
                @change="toggleDarkMode"
              />
              <span></span>
            </div>
          </li>
          <li>
            <button
              class="log-out nav-link title-color font-sm"
              data-bs-toggle="offcanvas"
              data-bs-target="#confirmation"
              aria-controls="confirmation"
            >
              <i class="iconly-Logout icli"></i><span>Cerrar sesión</span>
            </button>
          </li>
        </ul>
      </nav>
      <!-- Navigation End -->
    </div>
  </aside>
  <div
    id="confirmation"
    class="action action-confirmation offcanvas offcanvas-bottom"
    tabindex="-1"
    aria-labelledby="confirmation"
  >
    <div class="offcanvas-body small">
      <div class="confirmation-box">
        <h5>¿Está seguro de cerrar sesión?</h5>
        <div class="btn-box">
          <button
            class="btn-outline"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Cancelar
          </button>
          <button
            class="btn-solid d-block"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            @click="logout"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Logout from '../../services/Logout.js'
export default {
  name: 'Sidebar',
  components: {
    Logout,
  },
  props: {
    sidebar: Object,
  },
  data() {
    return {
      isDarkMode: localStorage.getItem('body') === 'dark',
      darkCSS: '/css/dark.css',
      name: null,
      nickName: null,
    }
  },
  watch: {
    'sidebar.show'(value) {
      if (value) {
        /** Add bluer class to body element **/
        document.body.classList.add('bluer')
      } else {
        /** Remove bluer class to body element **/
        document.body.classList.remove('bluer')
      }
    },
  },
  async mounted() {
    await Logout.getUser().then((data) => {
      this.nickName = data.user
      this.name = data.name
    })
  },
  beforeMount() {
    document.querySelector('.dark-mode-styles').href = this.isDarkMode
      ? this.darkCSS
      : ''
    document.body.className = this.isDarkMode ? 'dark' : ''
  },
  methods: {
    toggleDarkMode() {
      if (this.isDarkMode) {
        document.querySelector('.dark-mode-styles').href = this.darkCSS
        document.body.classList.add('dark')
        localStorage.setItem('body', 'dark')
      } else {
        document.querySelector('.dark-mode-styles').href = ''
        document.body.classList.remove('dark')
        localStorage.setItem('body', '')
      }
    },
    async logout() {
      await axios.delete('/logout')
      // redireccionar al login
      window.location.href = '/login'
      // eliminar información de la base de datos local
      const dbNames = await window.indexedDB.databases()
      dbNames.forEach(({ name }) => {
        window.indexedDB.deleteDatabase(name)
      })
    },
  },
}
</script>
