<template>
  <span>
    <button class="title-color" style="font-size: x-large" @click="goBack()">
      <i class="iconly-Arrow-Left-Square icli"> </i>
      Volver
    </button>
  </span>
</template>
<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>
