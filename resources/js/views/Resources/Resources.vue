<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nombre del Recurso</th>
          <th>Medio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Manual de Usuario</td>
          <td>
              <label>
                  Google Drive
              </label>
          </td>
          <td>
            <div class="row">
              <div class="col-6">
                <a :href="manualUsuario"
                    target="_blank">
                    <i class="iconly-Show icli boton"></i>
                </a>
              </div>
              <div class="col-6">
                <DescargarGoogleDrive :enlace="manualUsuario"/>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Manual Técnico</td>
          <td>
              <label>
                  Google Drive
              </label>
          </td>
          <td>
            <div class="row">
              <div class="col-6">
                <a :href="manualTecnico"
                    target="_blank">
                    <i class="iconly-Show icli boton"></i>
                </a>
              </div>
              <div class="col-6">
                <DescargarGoogleDrive :enlace="manualTecnico"/>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
  table {
  width: 100%;
  border-collapse: collapse;
  }

  th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
  }

 th{
  background-color: #f0f0f0;
  color: #0d2d6d;
 }
  
.boton {
  background-color: #0d2d6d;
  color: #f0f0f0;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  align-items: center;
  font-size: medium;
}
</style>
  

<script>
import DescargarGoogleDrive from './DescargarGoogleDrive.vue';
export default {
  name: 'Home',
  components: {
  DescargarGoogleDrive
},
data() {
  return {
    manualUsuario: "https://drive.google.com/file/d/10eurJLBvl5MIcNvsXHMYAE8XITYYPHsh/view?usp=sharing",
    manualTecnico: "https://drive.google.com/file/d/10f_ecLa_0Kakz4ifhCygO4GsNla_AbPn/view?usp=sharing",
  };
}
}
</script>
