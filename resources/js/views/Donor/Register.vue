<template>
  <!-- Header Start -->
  <header class="header">
    <div class="logo-wrap">
      <a href="#" @click="goBack()"
        ><i class="iconly-Arrow-Left-Square icli"></i
      ></a>
      <h1 class="title-color font-md">Volver</h1>
    </div>
  </header>
  <!-- Header End -->
  <!-- Main Start -->
  <main class="main-wrap about-us-page mb-xxl">
    <!-- How do I order? Section Start -->
    <section class="how-do-section pt-0">
      <h3 class="font-theme font-md">Registrar donante:</h3>
      <form ref="myForm">
        <div class="row">
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="iconly-Profile icli"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Nombre completo:</h4>
                  <div class="input-box mt-3">
                    <input
                      v-model="name"
                      maxlength="70"
                      type="text"
                      placeholder="Ingrese el nombre completo"
                      required
                      class="form-control"
                    />
                    <p v-if="showErrorMessageName" class="text-danger">
                      Nombre es requerido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="iconly-Tick-Square icli"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Cédula:</h4>
                  <div class="input-box mt-3">
                    <input
                      v-model="identification"
                      maxlength="50"
                      type="number"
                      placeholder="Ingrese la cédula sin guiones"
                      required
                      class="form-control"
                    />
                    <p v-if="showErrorMessageId" class="text-danger">
                      Cédula es requerido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="iconly-Call icli"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Télefono:</h4>
                  <div class="input-box mt-3">
                    <input
                      v-model="phone"
                      maxlength="12"
                      type="number"
                      placeholder="Ingrese el télefono"
                      required
                      class="form-control"
                    />
                    <p v-if="showErrorMessagePhone" class="text-danger">
                      Teléfono es requerido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="iconly-Message icli"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Correo electrónico:</h4>
                  <div class="input-box mt-3">
                    <input
                      v-model="email"
                      maxlength="50"
                      type="email"
                      placeholder="Ingrese el email"
                      required
                      class="form-control"
                    />
                    <i data-feather="at-sign"></i>
                    <p v-if="showErrorMessageEmail" class="text-danger">
                      Correo es requerido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="steps-wrap">
          <div class="steps-box">
            <span> <i class="iconly-Location icli"></i></span>
            <div class="content">
              <h4 class="title-color font-sm">Dirección exacta:</h4>
              <div class="input-box mt-3">
                <textarea
                  v-model="ubication"
                  maxlength="500"
                  type="text"
                  placeholder="Ingrese, provincia, canton y distrito, seguido de la dirección"
                  required
                  class="form-control"
                ></textarea>
                <p v-if="showErrorMessageUbication" class="text-danger">
                  Dirección es requerido.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
        <button
          class="btn btn-solid btn-block mt-3"
          @click.prevent="register()"
        >
          Registrar
        </button>
      </form>
    </section>
    <!-- How do I order? Section End -->
  </main>
</template>

<script>
import DonorService from '../../services/Donor'

export default {
  name: 'DonorRegister',
  components: {
    DonorService,
  },
  data() {
    return {
      name: null,
      identification: null,
      phone: null,
      email: null,
      ubication: null,
      showErrorMessageName: false,
      showErrorMessageId: false,
      showErrorMessagePhone: false,
      showErrorMessageEmail: false,
      showErrorMessageUbication: false,
      errorMessage: null,
    }
  },
  methods: {
    register() {
      const datos = {
        name: this.name,
        id: this.identification,
        phone: this.phone,
        email: this.email,
        ubication: this.ubication,
      }

      DonorService.register(datos)
        .then((response) => {
          this.errorMessage = ''
          this.goBack()
        })
        .catch((error) => {
          const errorMessages = error.response.data.errorMessage
          for (let fieldName in errorMessages) {
            if (fieldName === 'name') {
              this.showErrorMessageName = true
            }
            if (fieldName === 'id') {
              this.showErrorMessageId = true
            }
            if (fieldName === 'phone') {
              this.showErrorMessagePhone = true
            }
            if (fieldName === 'email') {
              this.showErrorMessageEmail = true
            }
            if (fieldName === 'ubication') {
              this.showErrorMessageUbication = true
            }
          }
        })
    },
    goBack() {
      this.$router.push({
        name: 'IndexDonor',
      })
    },
  },
}
</script>
