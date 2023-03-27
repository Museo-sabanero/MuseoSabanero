<template>
  <main class="main-wrap login-page mb-xxl">
    <!-- Login Section Start -->
    <section class="login-section p-0">
      <!-- Login Form Start -->
      <form class="custom-form" @submit.prevent="handleSubmit">
        <h1 class="font-md title-color fw-600">Editar Evento</h1>

        <!-- Email Input start -->
        <div class="input-box">
          <input
            id="id"
            v-model="formData.id"
            type="text"
            placeholder="ID"
            class="form-control"
            required
            hidden
          />
        </div>
        <!-- Email Input End -->
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
      <button
        type="submit"
        class="btn btn-primary w-100"
        style="background-color: red"
        @click="deleteEvent"
      >
        Eliminar Evento
      </button>
    </section>
  </main>
</template>
<script>
import Events from '../services/EventService'
export default {
  name: 'EventUpdate',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        id: '',
        dateStart: '',
        dateEnd: '',
        time: '',
        name: '',
        cost: '',
        description: '',
        maxPersons: '',
      },
      list: [],
    }
  },
  async mounted() {
    await Events.getEvent(this.id).then((data) => {
      this.list = data
      var event = this.list[0]
      ;(this.formData.id = event.id),
        (this.formData.dateStart = event.dateStart),
        (this.formData.dateEnd = event.dateEnd),
        (this.formData.time = event.time),
        (this.formData.name = event.name),
        (this.formData.cost = event.costUpdate),
        (this.formData.description = event.description),
        (this.formData.maxPersons = event.maxPersons)
    })
  },
  methods: {
    handleSubmit() {
      const registro = {
        id: this.formData.id,
        dateStart: this.formData.dateStart,
        dateEnd: this.formData.dateEnd,
        time: this.formData.time,
        name: this.formData.name,
        cost: this.formData.cost,
        description: this.formData.description,
        maxPersons: this.formData.maxPersons,
      }
      console.log(registro)

      Events.updateEvent(registro).then((data) => {
        console.log(data)
        this.$router.push('/event')
      })
    },
    deleteEvent() {
      console.log(this.formData)
      const registro = {
        id: this.formData.id,
      }
      console.log(registro)

      Events.deleteEvent(registro).then((data) => {
        console.log(data)
        this.$router.push('/event')
      })
    },
  },
}
</script>
