<template>
  <header class="header">
    <div class="logo-wrap">
      <GoBack></GoBack>
    </div>
  </header>

  <main v-if="item" class="main-wrap order-detail mb-xxl">
    <div class="card-body">
      <div class="">
        <div class="card">
          <div>
            <ul class="nav nav-pills border-1" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link text-body active"
                  data-bs-toggle="tab"
                  href="#detalles"
                  role="tab"
                >
                  Detalles
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-body"
                  data-bs-toggle="tab"
                  href="#Articulos"
                  role="tab"
                >
                  Articulos
                </a>
              </li>
            </ul>
            <!--end nav-->
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="tab-content">
        <div id="detalles" class="tab-pane active" role="tabpanel">
          <div class="section-p-b">
            <div class="banner-box">
              <div class="media">
                <!--Cargar Imagen-->
                <img
                  src="/images/avatar/avatar.jpg"
                  class="rounded-circle bg-secondary"
                  alt="box-image"
                />
                <div class="media-body">
                  <td v-if="item.status == 'A'">
                    <span class="badge bg-success text-uppercase mb-2">{{
                      item.statusDescription
                    }}</span>
                  </td>
                  <td v-if="item.status == 'I'">
                    <span class="badge bg-danger text-uppercase mb-2">{{
                      item.statusDescription
                    }}</span>
                  </td>
                  <span class="font-sm title-color"
                    >Fecha registro: {{ item.dateCreated }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Item Section Start -->
          <div class="item-section p-0">
            <h3 class="font-theme font-md">Información de donante:</h3>
            <!-- Form Section Start -->
            <br />
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
                <i class="iconly-Document icli"></i>
                <input
                  v-model="identification"
                  maxlength="70"
                  type="text"
                  placeholder="Ingrese la cédula"
                  required
                  class="form-control"
                />
                <p v-if="showErrorMessageId" class="text-danger">
                  Cédula es requerido.
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
              <div class="input-box">
                <i class="iconly-Call icli"></i>
                <input
                  v-model="phone"
                  type="number"
                  placeholder="9876543210"
                  class="form-control"
                  required
                />
                <p v-if="showErrorMessagePhone" class="text-danger">
                  El télefono es requerido.
                </p>
              </div>
              <div class="type-password">
                <label class="font-sm" for="password">Cambiar dirección:</label>
                <div class="input-box mb-0">
                  <i class="iconly-Location icli"></i>
                  <textarea
                    v-model="location"
                    maxlength="200"
                    :type="text"
                    placeholder="Ingrese la  dirección exacta"
                    required
                    class="form-control"
                  ></textarea>
                  <p v-if="showErrorMessageLocation" class="text-danger">
                    Dirección es requerido.
                  </p>
                </div>
                <p v-if="errorMessage" class="text-danger">
                  {{ errorMessage }}
                </p>
              </div>
              <br />
              <div class="d-flex justify-content-between align-items-center">
                <button
                  type="submit"
                  class="btn-solid"
                  @click.prevent="update()"
                >
                  Actualizar
                </button>
                <div v-if="item.status == 'A'">
                  <button
                    type="submit"
                    class="btn-red"
                    @click.prevent="change()"
                  >
                    Inactivar
                  </button>
                </div>
                <div v-else>
                  <button
                    type="submit"
                    class="btn-green"
                    @click.prevent="change()"
                  >
                    Activar
                  </button>
                </div>
              </div>
            </form>
            <!-- Form Section End -->
          </div>
        </div>
        <div id="Articulos" class="tab-pane" role="tabpanel">
          <div class="section-p-b">
            <div class="banner-box">
              <div class="media">
                <!--Cargar Imagen-->
                <img src="/images/icons/payment.svg" alt="box-image" />
                <div class="media-body">
                  <span class="font-sm title-color"
                    >Informacion de los artículos donados</span
                  >
                </div>
                <br />
              </div>
              <br />
            </div>
          </div>
          <div class="bottom-content">
            <div class="col-12" style="text-align: center">
              <div>
                <table class="table custom-table">
                  <thead>
                    <tr>
                      <th>Nombre del artículo</th>
                      <th>Fecha de registro</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody v-for="item in articulo" :key="item.id">
                    <tr>
                      <td>{{ item.name }}</td>
                      <td>{{ item.dateCreated }}</td>
                      <td>
                        <router-link
                          class="content-color font-sm text-primary iconly-Show"
                          :to="{
                            name: 'ArticleDetails',
                            params: { id: item.id },
                          }"
                        ></router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              v-if="articulo.length == 0"
              class="alert alert-secondary"
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                viewBox="0 0 16 16"
                role="img"
                aria-label="Warning:"
              >
                <path
                  d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
              No tiene artículos
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Donor from '../../services/Donor'
import GoBack from '../../components/GoBack.vue'
export default {
  name: 'DetailsDonor',
  components: {
    GoBack,
    Donor,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      phone: null,
      email: null,
      name: null,
      identification: null,
      location: null,
      item: null,
      articulo: null,
      errorClass: null,
      showErrorMessageName: false,
      showErrorMessagePhone: false,
      showErrorMessageLocation: false,
      showErrorMessageEmail: false,
      showErrorMessageId: false,
      errorMessage: null,
    }
  },
  async beforeMount() {
    await Donor.getDetails(this.id).then((data) => {
      console.log(data)
      this.item = data.Donante
      this.articulo = data.Articulo
      this.phone = this.item.phone
      this.name = this.item.name
      this.email = this.item.email
      this.identification = this.item.identification
      this.location = this.item.description
    })
  },
  methods: {
    update() {
      this.clear()
      const datos = {
        name: this.name,
        location: this.location,
        email: this.email,
        phone: this.phone,
        identification: this.identification,
        id: this.id,
      }
      this.errorMessage = ''

      Donor.update(datos)
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
            if (fieldName === 'phone') {
              this.showErrorMessagePhone = true
            }
            if (fieldName === 'location') {
              this.showErrorMessageLocation = true
            }
            if (fieldName === 'email') {
              this.showErrorMessageEmail = true
            }
            if (fieldName === 'id') {
              this.showErrorMessageId = true
            }
          }
        })
    },
    goBack() {
      this.$router.push({ name: 'IndexDonor' })
    },
    change() {
      Donor.changeStatus(this.id)
        .then((response) => {
          this.errorMessage = ''
          this.goBack()
        })
        .catch((error) => {
          this.errorMessage = error.response.data.errorMessage
        })
    },
    clear() {
      this.showErrorMessageName = ''
      this.showErrorMessagePhone = ''
      this.showErrorMessageLocation = ''
      this.showErrorMessageEmail = ''
      this.showErrorMessageId = ''
    },
  },
}
</script>
