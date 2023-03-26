import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/donor',
    name: 'Donor',
    component: () =>
      import(/* webpackChunkName: "donor" */ '../views/Donor.vue'),
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
    path: '/eventUpdate',
    name: 'EventUpdate',
    component: () =>
      import(/* webpackChunkName: "evendUpdate" */ '../views/EvendUpdate.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
