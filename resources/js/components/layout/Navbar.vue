<template>
  <footer class="footer-wrap">
    <ul class="footer">
      <li class="footer-item active">
        <a @click="goDashboard()" class="footer-link">
          <i class="iconly-Graph icli"></i>
          <span>Panel</span>
        </a>
      </li>
      <li class="footer-item">
        <a @click="goInventory()" class="footer-link">
          <i class="iconly-Bookmark icli"></i>

          <span>Inventario</span>
        </a>
      </li>
      <li class="footer-item">
        <a @click="goDonors()" class="footer-link">
          <i class="iconly-User3 icli"></i>
          <span>Donadores</span>
        </a>
      </li>
      <li class="footer-item">
        <a @click="goIncome()" class="footer-link">
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

    goInventory() {
      router.push('/home')
    },

    goDonors() {
      router.push('/donor')
    },
    goIncome() {
      router.push('/home')
    },
  },
}
</script>
