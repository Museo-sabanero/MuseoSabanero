import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/donor/index',
    name: 'IndexDonor',
    component: () => import(/* webpackChunkName: "donor" */ '../views/Donor/Index.vue'),
  },
  {
    path: '/donor/register',
    name: 'RegisterDonor',
    component: () => import(/* webpackChunkName: "donor" */ '../views/Donor/Register.vue'),
  },
  {
    path: '/donor/details/:id',
    name: 'DetailsDonor',
    component: () =>
      import(
        /* webpackChunkName: "detailsDonor" */ '../views/Donor/Details.vue'
      ),
    props: (route) => ({
      id: route.params.id,
    }),
  },
  {
    path: '/event',
    name: 'Event',
    component: () =>
      import(/* webpackChunkName: "event" */ '../views/Event.vue'),
  },
  {
    path: '/eventRegister',
    name: 'EventCreate',
    component: () =>
      import(
        /* webpackChunkName: "eventRegister" */ '../views/EventRegister.vue'
      ),
  },
  {
    path: '/eventUpdate/:id',
    name: 'EventUpdate',
    component: () =>
      import(/* webpackChunkName: "evendUpdate" */ '../views/EvendUpdate.vue'),
    props: (route) => ({
      id: route.params.id,
    }),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
