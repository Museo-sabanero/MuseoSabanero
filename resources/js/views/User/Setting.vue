<template>
  <!-- Header Start -->
  <header class="header">
    <div class="logo-wrap">
      <GoBack></GoBack>
    </div>
  </header>
  <!-- Header End -->

  <!-- Main Start -->
  <main v-if="item" class="main-wrap setting-page mb-xxl">
    <div class="user-panel">
      <div class="media">
        <div class="avatar-wrap">
          <a href="javascript:void(0)">
            <img src="/images/avatar/avatar.jpg" alt="avatar"
          /></a>
          <span class="edit"> <i class="iconly-Camera icli"></i></span>
        </div>
        <div class="media-body">
          <h2 class="title-color">{{ item.name }}</h2>
          <span class="content-color font-md">{{ item.email }}</span>
        </div>
      </div>
    </div>

    <!-- Form Section Start -->
    <form class="custom-form">
      <div class="input-box">
        <i class="iconly-Profile icli"></i>
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

      <div class="input-box">
        <i class="iconly-Login icli"></i>
        <input
          v-model="nameUser"
          maxlength="70"
          type="text"
          placeholder="Ingrese el nombre usuario"
          required
          class="form-control"
        />
        <p v-if="showErrorMessageNameUser" class="text-danger">
          Nombre de usuario es requerido.
        </p>
      </div>

      <div class="input-box">
        <i class="iconly-Message icli"></i>
        <input
          v-model="email"
          maxlength="50"
          type="email"
          placeholder="Ingrese el email"
          required
          class="form-control"
        />
        <p v-if="showErrorMessageEmail" class="text-danger">
          Correo es requerido.
        </p>
      </div>

      <!-- <div class="input-box">
        <i class="iconly-Call icli"></i>
        <input
          type="number"
          placeholder="9876543210"
          class="form-control"
          required
        />
      </div> -->

      <div class="input-box">
        <i class="iconly-Arrow-Down icli"></i>
        <select
          id="role"
          v-model="roleSelect"
          class="form-control mt-3"
          name="role"
          required
          :disabled="roleSelect === 2"
        >
          <option value="0">--Seleccione--</option>
          <option value="1">Administrador</option>
          <option value="2">Usuario</option>
        </select>
        <p v-if="showErrorMessageRole" class="text-danger">
          Seleccionar rol es requerido.
        </p>
      </div>

      <div class="type-password">
        <label class="font-sm" for="password">Cambiar contraseña</label>
        <div class="input-box mb-0">
          <i
            class="iconly-Hide icli showHidePassword"
            :class="{ 'iconly-Show': passwordFieldType === 'text' }"
            @click="togglePasswordFieldType"
          ></i>
          <input
            v-model="password"
            maxlength="50"
            :type="passwordFieldType"
            placeholder="Ingrese una contraseña"
            required
            class="form-control"
          />
          <p v-if="showErrorMessagePassword" class="text-danger">
            Contraseña es requerido.
          </p>
        </div>
        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
      </div>
      <button type="submit" class="btn-solid" @click.prevent="update()">
        Actualizar
      </button>
    </form>
    <!-- Form Section End -->
  </main>
  <!-- Main End -->
</template>
<script>
import UserService from '../../services/User'
import GoBack from '../../components/GoBack.vue'
export default {
  name: 'UserSetting',
  components: {
    UserService,
    GoBack,
  },
  data() {
    return {
      item: null,
      id: null,
      name: null,
      nameUser: null,
      password: null,
      email: null,
      roleSelect: 0,
      showPassword: false,
      showErrorMessageName: false,
      showErrorMessagePassword: false,
      showErrorMessagePasswordConfirm: false,
      showErrorMessageEmail: false,
      showErrorMessageRole: false,
      errorMessage: null,
    }
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? 'text' : 'password'
    },
  },
  async beforeMount() {
    await UserService.getDetails().then((data) => {
      this.item = data
      this.name = this.item.name
      this.id = this.item.id
      this.nameUser = this.item.login
      this.email = this.item.email
      this.password = this.item.password
      this.roleSelect = this.item.role
      console.log(this.item)
    })
  },
  methods: {
    togglePasswordFieldType() {
      this.showPassword = !this.showPassword
    },
    update() {
      if (this.roleSelect == '0') {
        return (this.errorMessage = 'Error, ¡Debe seleccionar un rol!')
      }
      const datos = {
        name: this.name,
        password: this.password,
        nameUser: this.nameUser,
        email: this.email,
        role: this.roleSelect,
        id: this.id,
      }
      this.errorMessage = ''

      UserService.update(datos)
        .then((response) => {
          this.errorMessage = ''
          console.log(response.data.status)
          if (response.data.status === 201) {
            this.goBack()
          }
        })
        .catch((error) => {
          const errorMessages =
            error.response?.data?.errorMessage ?? 'Indefinido'
          if (errorMessages == 'Indefinido') {
            this.goBack()
          }
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
