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
    component: () =>
      import(/* webpackChunkName: "donor" */ '../views/Donor/Index.vue'),
  },
  {
    path: '/donor/register',
    name: 'RegisterDonor',
    component: () =>
      import(/* webpackChunkName: "donor" */ '../views/Donor/Register.vue'),
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
    path: '/event/index',
    name: 'Event',
    component: () =>
      import(/* webpackChunkName: "event" */ '../views/Event/Event.vue'),
  },
  {
    path: '/event/register',
    name: 'EventCreate',
    component: () =>
      import(
        /* webpackChunkName: "eventRegister" */ '../views/Event/EventRegister.vue'
      ),
  },
  {
    path: '/event/update/:id',
    name: 'EventUpdate',
    component: () =>
      import(
        /* webpackChunkName: "evendUpdate" */ '../views/Event/EvendUpdate.vue'
      ),
    props: (route) => ({
      id: route.params.id,
    }),
  },
  {
    path: '/article/index',
    name: 'ArticleView',
    component: () =>
      import(
        /* webpackChunkName: "ArticleView" */ '../views/Article/Article.vue'
      ),
  },
  {
    path: '/article/register',
    name: 'ArticleRegister',
    component: () =>
      import(
        /* webpackChunkName: "articleRegister" */ '../views/Article/ArticleRegister.vue'
      ),
  },
  {
    path: '/article/update/:id',
    name: 'ArticleUpdate',
    component: () =>
      import(
        /* webpackChunkName: "articleUpdate" */ '../views/Article/ArticleUpdate.vue'
      ),
    props: (route) => ({
      id: route.params.id,
    }),
  },
  {
    path: '/article/details/:id',
    name: 'ArticleDetails',
    component: () =>
      import(
        /* webpackChunkName: "articleDetails" */ '../views/Article/ArticleDetails.vue'
      ),
    props: (route) => ({
      id: route.params.id,
    }),
  },
  {
    path: '/user/register',
    name: 'RegisterUser',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/User/Register.vue'),
  },
  {
    path: '/user/Setting',
    name: 'SettingUser',
    component: () =>
      import(/* webpackChunkName: "setting" */ '../views/User/Setting.vue'),
  },
  {
    path: '/restauration/index',
    name: 'RestaurationView',
    component: () =>
      import(
        /* webpackChunkName: "RestaurationView" */ '../views/Restauration/Restauration.vue'
      ),
  },
  {
    path: '/restauration/register',
    name: 'RestaurationRegister',
    component: () =>
      import(
        /* webpackChunkName: "restaurationRegister" */ '../views/Restauration/Register.vue'
      ),
  },
  {
    path: '/restauration/update/:id',
    name: 'RestaurationUpdate',
    component: () =>
      import(
        /* webpackChunkName: "restaurationUpdate" */ '../views/Restauration/Update.vue'
      ),
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
