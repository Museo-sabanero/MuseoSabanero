<template>
  <main class="centrar">
    <div class="contenedor">
      <div class="contenido">
        <div class="botones">
          <a
            href="https://drive.google.com/file/d/10eurJLBvl5MIcNvsXHMYAE8XITYYPHsh/view?usp=sharing"
            target="_self"
            class="boton"
          >
            <i class="iconly-User2 icli"></i>
            | Manual de Usuario
          </a>
          <a
            href="https://drive.google.com/file/d/10f_ecLa_0Kakz4ifhCygO4GsNla_AbPn/view?usp=sharing"
            target="_blank"
            class="boton"
          >
            <i class="iconly-Setting icli"></i>
            | Manual Técnico
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Home',
}
</script>

<style>
.centrar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contenedor {
  position: relative;
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  background-image: url('../../../public/images/museo/fondo2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed;  */
}
.botones {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.boton {
  display: block;
  padding: 1rem;
  background-color: #0d2d6d;
  color: #f0f0f0;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-bottom: 1rem;
}
</style>
