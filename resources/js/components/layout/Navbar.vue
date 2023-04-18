<template>
  <footer class="footer-wrap">
    <ul class="footer">
      <li class="footer-item active">
        <a class="footer-link" @click="goDashboard()">
          <i class="iconly-Graph icli"></i>
          <span>Panel</span>
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
        <a class="footer-link" @click="goIncome()">
          <i class="iconly-Chart icli"></i>
          <span class="offer">Ingresos</span>
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
    goDashboard() {
      router.push('/home')
    },

    goArticles() {
      router.push('/article/index')
    },

    goDonors() {
      router.push('/donor/index')
    },
    goIncome() {
      router.push('/home')
    },
  },
}
</script>
