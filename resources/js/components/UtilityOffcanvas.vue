<template>
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
              <h4 id="save" class="mb-3">{{ title }}:</h4>
              <div class="input-box mt-3">
                <input
                  v-model="value"
                  type="text"
                  placeholder="Ingrese {{ title }}"
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
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        phone: "",
        errorMessage: "",
        showOffcanvas: true,
      };
    },
    methods: {
      updateCost() {
        // implementar lógica para actualizar en la bd utilizando el id
      },
    },
  };
  </script>
  