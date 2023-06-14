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
          <a href="#">
            <img src="public/images/avatar/avatar.jpg" alt="avatar"
          /></a>
          <div class="media-body">
            <a class="title-color font-sm"
              >{{ name }}
              <span class="content-color font-xs">Rol: {{ role }}</span>
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
          <li v-if="isAdmin">
            <router-link
              to="/user/register"
              class="nav-link title-color font-sm"
            >
              <i class="iconly-User2"></i>
              <span>Registrar usuarios</span>
            </router-link>
            <router-link class="arrow" to="/user/register"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link
              to="/donor/register"
              class="nav-link title-color font-sm"
            >
              <i class="iconly-Add-User"></i>
              <span>Registrar donador</span>
            </router-link>
            <router-link class="arrow" to="/donor/register"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link
              to="/event/register"
              class="nav-link title-color font-sm"
            >
              <i class="iconly-Calendar"></i>
              <span>Registrar eventos</span>
            </router-link>
            <router-link class="arrow" to="/event/register"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link
              to="/article/register"
              class="nav-link title-color font-sm"
            >
              <i class="bx bx-layer-plus"></i>
              <span>Registrar articulo</span>
            </router-link>
            <router-link class="arrow" to="/article/register"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link
              to="/restauration/register"
              class="nav-link title-color font-sm"
            >
              <i class="bx bx-add-to-queue"></i>
              <span>Registrar restauración</span>
            </router-link>
            <router-link class="arrow" to="/restauration/register"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link
              to="/deliveryhistory"
              class="nav-link title-color font-sm"
            >
              <i class="iconly-Time-Circle"></i>
              <span>Historial</span>
            </router-link>
            <router-link class="arrow" to="/home"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>
          <!-- <li>
            <router-link to="/event/index" class="nav-link title-color font-sm">
              <i class="iconly-Calendar icli"></i>
              <span>Eventos</span>
            </router-link>
            <router-link class="arrow" to="/event/index"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li> -->
          <!-- <li>
            <router-link
              to="/restauration/index"
              class="nav-link title-color font-sm"
            >
              <i class="iconly-Calendar icli"></i>
              <span>Restauraciones</span>
            </router-link>
            <router-link class="arrow" to="/restauration/index"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li> -->
          <li v-if="showInstallButton">
            <button
              class="log-out nav-link title-color font-sm"
              @click="installPWA"
            >
              <i class="iconly-Download icli"></i
              ><span>Instalar aplicación</span>
            </button>
          </li>
          <li>
            <router-link
              to="/user/setting"
              class="nav-link title-color font-sm"
            >
              <i class="iconly-Setting icli"></i>
              <span>Configuración</span>
            </router-link>
            <router-link class="arrow" to="/user/setting"
              ><i class="bx bxs-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <a href="javascript:void(0)" class="nav-link title-color font-sm">
              <i class="iconly-Show icli"></i>
              <span>Tema oscuro</span>
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
      role: null,
      isAdmin: null,
      showInstallButton: false,
      deferredPrompt: null,
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
  created() {
    // Validar el navegador y establecer showInstallButton en false si es Firefox o Safari
    const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    if (isFirefox || isSafari) {
      this.showInstallButton = false
    } else {
      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault()
        this.deferredPrompt = event
        this.showInstallButton = true
      })
    }
  },
  async mounted() {
    await Logout.getUser().then((data) => {
      this.role = data.role
      this.name = data.name
      this.isAdmin = data.isAdmin
    })
  },
  beforeMount() {
    document.querySelector('.dark-mode-styles').href = this.isDarkMode
      ? this.darkCSS
      : ''
    document.body.className = this.isDarkMode ? 'dark' : ''
  },
  methods: {
    installPWA() {
      try {
        if (this.deferredPrompt) {
          this.deferredPrompt.prompt()
          this.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('La aplicación ha sido instalada como PWA')
            } else {
              console.log(
                'El usuario ha cancelado la instalación de la aplicación como PWA'
              )
            }
            this.deferredPrompt = null
            this.showInstallButton = false
          })
        }
      } catch (error) {
        alert('Error: ' + error)
      }
    },
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
      const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute('content')
      await axios.delete('/logout', {
        headers: {
          'X-CSRF-TOKEN': csrfToken,
        },
      })
      // redireccionar al login
      window.location.href = '/login'
    },
  },
}
</script>
