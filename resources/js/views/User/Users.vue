<template>
    <main class="main-wrap index-page mb-xxl">
    
    <!-- earch Box Start-->
   <div class="search-box">
     <div>
     <i class="iconly-Search icli search"></i>
     <input
       v-model="searchTerm"
       class="form-control"
       type="search"
       placeholder="Buscar por nombre o descripción"
       @input="filterData()"
     />
     </div>
     
   </div>
   
   <!-- Search Box End -->
   <br /><br />
   <section class="offer-section pt-0">
     <div class="offer">
       <div class="top-content">
         <div>
           <h4 class="title-color">Usuarios</h4>
         </div>
         <router-link to="/user/register" class="font-theme">
           Registrar
         </router-link>
       </div>
       <main
      v-for="item in List"
      :key="item.id"
      class="main-wrap order-history mb-4"
    >
      <div class="tab-content ratio2_1">
        <div class="tab-pane fade show active">
          <!-- Order Box Start -->
          <div class="order-box">
            <div class="media">
              <a href="javascript:void(0)" class="content-box">
                <div class="d-flex justify-content-between mb-3">
                  <div>
                    <h4 class="title-color font-sm">
                      ID:
                      <span class="content-color font-theme"
                        >{{ item.id }}
                      </span>
                    </h4>
                  </div>
                  <div>
                    <h4 class="title-color font-sm ms-3">
                      Estado:
                      <span
                        v-if="item.status === 'A'"
                        class="badge bg-success text-uppercase"
                        >Activo </span
                      ><span
                        v-if="item.status === 'I'"
                        class="badge bg-danger text-uppercase"
                        >Inactivo
                      </span>
                    </h4>
                  </div>
                </div>
                <span
                  class="font-sm color-title d-inline-block text-truncate mb-2"
                  style="max-width: 250px; white-space: nowrap"
                  >Fecha registro: {{ item.dateCreated }}</span
                >
                <p class="font-xs content-color mb-2">Nombre: {{ item.name }}</p>
                <span
                  class="content-color font-xs d-inline-block text-truncate mb-2"
                  style="max-width: 190px; white-space: nowrap"
                  >Rol: {{ item.roleDescription }}</span
                >
                <p class="font-xs content-color mb-2">Correo: {{ item.email}}</p>
              </a>
              <div class="media-body">
                
              </div>
            </div>
            <div class="d-grid grap-2">
              
              <div v-if ="item.status =='A'">
                <button class="btn-outline bg-danger font-md text-center" @click="deleteEvent(item.id,item.status)">
                  Inactivar
                </button>
                
              </div>
              <div v-else>
                <button class="btn-outline bg-success font-md text-center" @click="deleteEvent(item.id,item.status)">
                  Activar
                </button>
               
              </div>
            </div>
          </div>
          <!-- Order Box End -->
        </div>
      </div>
    </main>
     </div>
   </section>
 </main>
  </template>
  <script>
  import UserService from '../../services/User'
 
  import { exportExcel } from '../../exportExcel'
  export default {
    name: 'IndexDonor',
    data() {
      return {
        formData: {
        id: '',
        
      },
        List: [],
        originalList: [],
        searchTerm: '',
        items: null,
      }
    },
    async mounted() {
      
      await UserService.getUser().then((data) => {
        console.log(data);
        this.items = data;
        this.List = data
        this.originalList = this.List
      })
    },
    methods: {
      filterData() {
        const searchTerm = this.searchTerm.toLowerCase()
        if (searchTerm === '') {
          // Si la barra de búsqueda está vacía, se restaura la lista original
          this.List = [...this.originalList]
        } else {
          const expression = new RegExp(searchTerm, 'i')
          this.List = this.originalList.filter(
            (item) =>
              expression.test(item.name) || expression.test(item.identification)
          )
        }
      },
      deleteEvent(id,status) {
      const identification = {
        id: id,
        status:status,
      }
      console.log(identification)
      UserService.delete(identification).then(async (data) => {
        await UserService.getUser().then((data) => {
        
        this.items = data;
        this.List = data
        this.originalList = this.List
      })
      })
    },
      // exportex() {
      //   const Headers = [
      //     'ID', 'Nombre', 'Telefono','Correo', 'Identificacion','Direccion', 'Estado', 'Descripcion de estado','Fecha de registro'
      //     ]
      //   // const columnsToExport = this.items.map(
      //   //   ({ legalStatusDescription, codQR, user, ...rest }) => rest
      //   // )
      //   exportExcel(
      //     'Donadores del museo del sabanero',
      //     'Donadores',
      //     this.items,
      //     Headers
      //   )
      // },
    },
  }
  </script>
  