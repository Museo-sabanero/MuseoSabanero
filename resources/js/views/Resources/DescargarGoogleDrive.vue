<template>
  <div>
    <button @click="descargar"><i class="iconly-Download icli boton"></i></button>
  </div>
</template>

<script>
export default {
  methods: {
    descargar() {
      // Reemplaza la parte inicial del enlace compartido
      const idArchivo = this.enlace.replace("https://drive.google.com/file/d/", "").split("/")[0];
      // Genera el enlace de descarga directa
      const enlaceDescarga = "https://drive.google.com/uc?export=download&id=" + idArchivo;
      // Inicia la descarga redirigiendo al navegador a la URL de descarga
      window.location.href = enlaceDescarga;
    }
  },
  props: {
    enlace: {
      type: String,
      required: true
    }
  }
};
</script>
