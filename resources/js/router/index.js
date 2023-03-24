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
    component: () => import(/* webpackChunkName: "home" */ '../views/Donor.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
