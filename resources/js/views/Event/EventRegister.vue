<template>
  <header class="header">
    <div class="logo-wrap">
      <GoBack></GoBack>
    </div>
  </header>
  <main class="main-wrap login-page mb-xxl">
    <!-- Login Section Start -->
    <section class="login-section p-0">
      <!-- Login Form Start -->
      <h3 class="font-theme font-md">Registrar Evento</h3>
      <form class="custom-form" @submit.prevent="handleSubmit">
        <!-- Email Input start -->
        <div class="input-box">
          <input
            id="name"
            v-model="formData.name"
            type="text"
            placeholder="Nombre"
            class="form-control"
            required
          />
        </div>
        <!-- Email Input End -->
        <!-- Email Input start -->
        <div class="input-box">
          <input
            id="description"
            v-model="formData.description"
            type="text"
            placeholder="Descripción"
            class="form-control"
            required
          />
        </div>
        <!-- Email Input End -->
        <!-- Email Input start -->
        <div class="input-box">
          <input
            id="cost"
            v-model="formData.cost"
            type="number"
            placeholder="Costo"
            class="form-control"
            required
          />
        </div>
        <!-- Email Input End -->
        <!-- Email Input start -->
        <div class="input-box">
          <input
            id="maxPersons"
            v-model="formData.maxPersons"
            type="number"
            placeholder="Máximo de Personas"
            class="form-control"
            required
          />
        </div>
        <!-- Email Input End -->
        <!-- Email Input start -->
        <div>
          <label for="dateStart" class="form-label" style="text-align: left"
            >Fecha de inicio:</label
          >
          <input
            id="dateStart"
            v-model="formData.dateStart"
            type="date"
            class="form-control"
            required
          />
        </div>
        <!-- Email Input End -->
        <div>
          <label for="time" class="form-label">Hora:</label>
          <input
            id="time"
            v-model="formData.time"
            type="time"
            class="form-control"
            required
          />
        </div>
        <!-- Email Input start -->
        <div>
          <label for="dateEnd" class="form-label">Fecha de finalización:</label>
          <input
            id="dateEnd"
            v-model="formData.dateEnd"
            type="date"
            class="form-control"
            required
          />
        </div>
        <!-- Email Input End -->
        <button type="submit" class="btn-solid">Guardar</button>
      </form>
      <!-- Login Form End -->
    </section>
    <!-- <button @click="togglePopup">Mostrar/Ocultar Popup</button> -->
    <!-- Login Section End -->
  </main>
  <!-- <div
    id="offcanvas"
    :class="{
      'offcanvas offcanvas-bottom addtohome-popup show': showPopup,
      'offcanvas offcanvas-bottom addtohome-popup': !showPopup,
    }"
    tabindex="-1"
  >
    <div class="offcanvas-body small">
      <div class="app-info">
        <img src="assets/images/logo/logo48.png" class="img-fluid" alt="" />
        <div class="content">
          <h3>
            Fastkart App <i data-feather="x" data-bs-dismiss="offcanvas"></i>
          </h3>
          <a href="#">www.fastkart-app.com</a>
        </div>
      </div>
      <button id="installApp" class="btn-solid install-app">
        Add to home screen
      </button>
    </div>
  </div> -->
</template>

<script>
import Events from '../../services/EventService'
import GoBack from '../../components/GoBack.vue'
export default {
  name: 'EventRegister',
  components: {
    GoBack,
  },
  data() {
    return {
      formData: {
        dateStart: '',
        dateEnd: '',
        time: '',
        name: '',
        cost: '',
        description: '',
        maxPersons: '',
      },
      showPopup: false,
    }
  },
  methods: {
    handleSubmit() {
      const registro = {
        dateStart: this.formData.dateStart,
        dateEnd: this.formData.dateEnd,
        time: this.formData.time,
        name: this.formData.name,
        cost: this.formData.cost,
        description: this.formData.description,
        maxPersons: this.formData.maxPersons,
      }

      Events.createEvent(registro).then((data) => {
        this.$router.push('/event/index')
      })
    },
    goBack() {
      this.$router.push({ name: 'Event' })
    },
    // togglePopup() {
    //   this.showPopup = !this.showPopup
    // },
  },
}
</script>
