<template>
  <header class="header">
    <div class="logo-wrap">
      <i
        class="iconly-Category icli nav-bar"
        @click="() => $emit('sidebar-show')"
      ></i>
      <a>
        <img class="logo logo-w" src="/images/logo/logo-w.png" alt="logo" /></a
      ><a> <img class="logo" src="/images/logo/logo.png" alt="logo" /></a>
    </div>
    <div class="avatar-wrap"></div>
  </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>
