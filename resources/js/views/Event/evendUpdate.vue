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
      <h3 class="font-theme font-md">Editar Evento</h3>
      <form class="custom-form" @submit.prevent="handleSubmit">
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
import Events from '../../services/EventService'
import GoBack from '../../components/GoBack.vue'
export default {
  name: 'EventUpdate',
  components: {
    GoBack,
  },
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
      Events.updateEvent(registro).then((data) => {
        this.$router.push('/event/index')
      })
    },
    deleteEvent() {
      const registro = {
        id: this.formData.id,
      }

      Events.deleteEvent(registro).then((data) => {
        this.$router.push('/event/index')
      })
    },
    goBack() {
      this.$router.push({ name: 'Event' })
    },
  },
}
</script>
