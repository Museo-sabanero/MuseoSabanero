<template>
  <main class="main-wrap login-page mb-xxl">
    <!-- Login Section Start -->
    <section class="login-section p-0">
      <!-- Login Form Start -->
      <form class="custom-form" @submit.prevent="handleSubmit">
        <h1 class="font-md title-color fw-600">Registrar Evento</h1>

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
          <label for="dateStart" class="form-label">Fecha de inicio:</label>
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
</template>
<script>
import Events from '../services/EventService'
export default {
  name: 'EventUpdate',
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
  async mounted() {
    const data = {
      id: '1',
    }
    await Events.getEvent('1').then((data) => {
      console.log(data)
      ;(this.formData.dateStart = data.dateStart),
        (this.formData.dateEnd = data.dateEnd),
        (this.formData.time = data.time),
        (this.formData.name = data.name),
        (this.formData.cost = data.cost),
        (this.formData.description = data.description),
        (this.formData.maxPersons = data.maxPersons)
      console.log(this.formData)
    })
  },
  methods: {
    handleSubmit() {
      console.log(this.formData)
      const registro = {
        dateStart: this.formData.dateStart,
        dateEnd: this.formData.dateEnd,
        time: this.formData.time,
        name: this.formData.name,
        cost: this.formData.cost,
        description: this.formData.description,
        maxPersons: this.formData.maxPersons,
      }
      // Aquí podrías enviar los datos a través de una petición HTTP o hacer algo más con ellos
      console.log(registro)

      Events.createEvent(registro).then((data) => {
        console.log(data)
        this.$router.push('/event')
      })
    },
    togglePopup() {
      this.showPopup = !this.showPopup
    },
  },
}
</script>
