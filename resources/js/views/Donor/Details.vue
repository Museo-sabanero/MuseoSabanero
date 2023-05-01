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
            <h3 class="font-theme font-md">Información de contacto:</h3>

            <div class="item-wrap">
              <!-- Item Start -->
              <div class="media">
                <div class="count">
                  <!--<span class="font-sm">1</span>-->
                  <div class="icon"></div>
                </div>
                <div class="media-body" style="width: 100%">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h4 class="title-color font-sm">Nombre:</h4>
                      <div class="d-flex align-items-center">
                        <div
                          class="avatar-title rounded bg-transparent text-success fs-24 me-2"
                        >
                          <i
                            v-if="item.status == 'A'"
                            data-bs-target="#choosing-delivery"
                            data-bs-toggle="offcanvas"
                            aria-controls="choosing-delivery"
                            class="ri-edit-2-fill"
                          ></i>
                        </div>
                        <span
                          class="content-color font-xs d-inline-block text-truncate"
                          style="max-width: 190px; white-space: nowrap"
                          >{{ item.name }}</span
                        >
                      </div>
                    </div>
                    <div>
                      <h4 class="title-color font-sm">Correo electrónico:</h4>
                      <div class="d-flex align-items-center">
                        <div
                          class="avatar-title rounded bg-transparent text-success fs-24 me-2"
                        >
                          <i
                            v-if="item.status == 'A'"
                            data-bs-target="#choosing-delivery"
                            data-bs-toggle="offcanvas"
                            aria-controls="choosing-delivery"
                            class="ri-edit-2-fill"
                          ></i>
                        </div>
                        <span
                          class="content-color font-xs d-inline-block text-truncate"
                          style="max-width: 190px; white-space: nowrap"
                          >{{ item.email }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="media">
                <div class="count">
                  <div class="icon"></div>
                </div>
                <div class="media-body" style="width: 100%">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h4 class="title-color font-sm">Cédula:</h4>
                      <div class="d-flex align-items-center">
                        <div
                          class="avatar-title rounded bg-transparent text-success fs-24 me-2"
                        >
                          <i
                            v-if="item.status == 'A'"
                            data-bs-target="#choosing-delivery"
                            data-bs-toggle="offcanvas"
                            aria-controls="choosing-delivery"
                            class="ri-edit-2-fill"
                          ></i>
                        </div>
                        <span class="content-color font-sm">{{
                          item.identification
                        }}</span>
                      </div>
                    </div>
                    <div>
                      <h4 class="title-color font-sm">Teléfono:</h4>
                      <div class="d-flex align-items-center">
                        <div
                          class="avatar-title rounded bg-transparent text-success fs-24 me-2"
                        >
                          <i
                            v-if="item.status == 'A'"
                            data-bs-target="#choosing-delivery"
                            data-bs-toggle="offcanvas"
                            aria-controls="choosing-delivery"
                            class="ri-edit-2-fill"
                          ></i>
                        </div>
                        <span class="content-color font-sm">{{
                          item.phone
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Item Start -->
              <div class="media">
                <div class="count"></div>
                <div class="media-body">
                  <h4 class="title-color font-sm">Dirección:</h4>
                  <div class="d-flex align-items-center">
                    <div
                      class="avatar-title rounded bg-transparent text-success fs-24 me-2"
                    >
                      <i
                        v-if="item.status == 'A'"
                        data-bs-target="#choosing-delivery"
                        data-bs-toggle="offcanvas"
                        aria-controls="choosing-delivery"
                        class="ri-edit-2-fill"
                      ></i>
                    </div>
                    <span class="content-color font-sm">{{
                      item.description
                    }}</span>
                  </div>
                </div>
              </div>
              <div
                v-if="item.status == 'A'"
                class="d-grid grap-2 text-end mt-5"
              >
                <a
                  class="btn btn-danger text-center text-white"
                  @click.prevent="change()"
                  >Inactivar</a
                >
              </div>
              <div v-else class="d-grid grap-2 text-end mt-5">
                <a
                  class="btn btn-success text-center text-white"
                  @click.prevent="change()"
                  >Activar</a
                >
              </div>
            </div>
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
                          class="content-color font-sm text-primary"
                          :to="{
                            name: 'DetailsDonor',
                            params: { id: item.id },
                          }"
                          >Ver</router-link
                        >
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
  <!--start modal-->
  <div
    id="choosing-delivery"
    class="shop-fillter order-history-filter offcanvas offcanvas-bottom"
    tabindex="-1"
    aria-modal="true"
    aria-labelledby="choosing-delivery"
    role="dialog"
    :class="{ close: !showOffcanvas }"
  >
    <div class="">
      <div class="">
        <div class="offcanvas-header">
          <h2 class="">
            <img
              src="/images/icons/payment.svg"
              alt="map"
              class="rounded-circle bg-success"
              style="max-width: 120px; max-height: 120px"
            />
          </h2>
          <button
            type="button"
            class="close btn-secondary btn-lg"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="offcanvas-body small d-flex">
          <div class="flex-grow-1 steps-box">
            <h4 id="save" class="mb-3">Teléfono:</h4>
            <div class="input-box mt-3">
              <input
                v-model="phone"
                type="text"
                placeholder="Ingrese el teléfono"
                required
                class="form-control text-success"
              />
            </div>
            <p class="text-start" :class="errorClass">{{ errorMessage }}</p>
          </div>
        </div>
        <div class="offcanvas-footer">
          <div class="btn-box">
            <button class="btn-solid font-md" @click.prevent="updateCost()">
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End modal-->
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
      item: null,
      articulo: null,
      errorMessage: null,
      showOffcanvas: true,
      errorClass: null,
    }
  },
  async beforeMount() {
    await Donor.getDetails(this.id).then((data) => {
      console.log(data)
      this.item = data.Donante
      this.articulo = data.Articulo
      this.phone = this.item.phone
    })
  },
  methods: {
    updateCost() {
      const currentDate = new Date().toISOString()

      const datos = {
        currentDate: currentDate,
        cost: this.cost,
      }

      IncrementService.updateAmount(this.id, this.location, datos)
        .then((response) => {
          console.log(response.data)
          this.errorMessage = ''
          this.item.cost = this.cost
          this.errorClass = 'text-success'
          this.errorMessage = 'El monto ha sido actualizado'
        })
        .catch((error) => {
          console.log(error)
          if (typeof error.response.data.errorMessage === 'string') {
            this.errorClass = 'text-danger'
            this.errorMessage = error.response.data.errorMessage
          } else {
            this.errorClass = 'text-danger'
            this.errorMessage = Object.values(
              error.response.data.errorMessage
            )[0][0]
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
  },
}
</script>
