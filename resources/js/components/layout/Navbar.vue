<template>
  <footer class="footer-wrap">
    <ul class="footer">
      <li class="footer-item active">
        <a class="footer-link" @click="goToHome()">
          <i class="iconly-Home icli"></i>
          <span>Inicio</span>
        </a>
      </li>
      <li class="footer-item">
        <a class="footer-link" @click="goArticles()">
          <i class="iconly-Bookmark icli"></i>

          <span>Articulos</span>
        </a>
      </li>
      <li class="footer-item">
        <a class="footer-link" @click="goDonors()">
          <i class="iconly-User3 icli"></i>
          <span>Donadores</span>
        </a>
      </li>
      <li class="footer-item">
        <a class="footer-link" @click="goRestore()">
          <i class="iconly-Shield-Done icli"></i>
          <span class="offer">Restauraciones</span>
        </a>
      </li>
    </ul>
  </footer>
</template>
<script>
import router from '../../router/index'

export default {
  name: 'Navbar',
  components: {
    router,
  },
  methods: {
    goArticles() {
      router.push('/article/index')
    },

    goToHome() {
      router.push('/home')
    },

    goDonors() {
      router.push('/donor/index')
    },
    goRestore() {
      router.push('/restauration/index')
    },
  },
}
</script>
