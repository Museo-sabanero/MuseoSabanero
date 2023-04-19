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
      <h3 class="font-theme font-md">Registrar usuarios:</h3>
      <form ref="myForm">
        <div class="row">
          <div class="col-md-12">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="iconly-Profile icli"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Nombre:</h4>
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
          <div class="col-md-12">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="iconly-Profile icli"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Nombre de usuario:</h4>
                  <div class="input-box mt-3">
                    <input
                      v-model="nameUser"
                      maxlength="70"
                      type="text"
                      placeholder="Ingrese un nombre de usuario"
                      required
                      class="form-control"
                    />
                    <p v-if="showErrorMessageNameUser" class="text-danger">
                      Nombre de usuario es requerido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
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
          <div class="col-md-12">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="iconly-Arrow-Down icli"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Seleccione un rol:</h4>
                  <div class="input-box mt-3">
                    <select
                      id="role"
                      v-model="roleSelect"
                      class="form-control mt-3"
                      name="role"
                      required
                    >
                      <option value="0">--Seleccione--</option>
                      <option value="1">Administrador</option>
                      <option value="2">Usuario</option>
                    </select>
                    <p v-if="showErrorMessageRole" class="text-danger">
                      Seleccionar rol es requerido.
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
                <span> <i class="iconly-Password icli"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Contraseña:</h4>
                  <div class="input-box mt-3">
                    <input
                      v-model="password"
                      maxlength="50"
                      type="password"
                      placeholder="Ingrese una contraseña"
                      required
                      class="form-control"
                    />
                    <p v-if="showErrorMessagePassword" class="text-danger">
                      Contraseña es requerido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="steps-wrap">
              <div class="steps-box">
                <span> <i class="iconly-Password icli"></i></span>
                <div class="content">
                  <h4 class="title-color font-sm">Confirmar contraseña:</h4>
                  <div class="input-box mt-3">
                    <input
                      v-model="passwordConfirm"
                      maxlength="12"
                      type="password"
                      placeholder="Confirme la contraseña"
                      required
                      class="form-control"
                    />
                    <p
                      v-if="showErrorMessagePasswordConfirm"
                      class="text-danger"
                    >
                      Confirmación es requerido.
                    </p>
                  </div>
                </div>
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
import UserService from '../../services/User'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'UserRegister',
  components: {
    UserService,
  },
  data() {
    return {
      name: null,
      token: null,
      nameUser: null,
      password: null,
      passwordConfirm: null,
      email: null,
      roleSelect: 0,
      showErrorMessageName: false,
      showErrorMessagePassword: false,
      showErrorMessagePasswordConfirm: false,
      showErrorMessageEmail: false,
      showErrorMessageRole: false,
      errorMessage: null,
    }
  },
  methods: {
    register() {
      if (this.password !== this.passwordConfirm) {
        return (this.errorMessage = 'Error, ¡Las contraseñas no coinciden!')
      }
      if (this.roleSelect == '0') {
        return (this.errorMessage = 'Error, ¡Debe seleccionar un rol!')
      }
      const token = uuidv4()
      localStorage.setItem('token', token)

      const datos = {
        name: this.name,
        password: this.password,
        nameUser: this.nameUser,
        email: this.email,
        role: this.roleSelect,
        token: token,
      }
      this.errorMessage = ''
      console.log(datos)

      UserService.register(datos)
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
            if (fieldName === 'nameUser') {
              this.showErrorMessageNameUser = true
            }
            if (fieldName === 'password') {
              this.showErrorMessagePassword = true
            }
            if (fieldName === 'email') {
              this.showErrorMessageEmail = true
            }
            if (fieldName === 'role') {
              this.showErrorMessageRole = true
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
