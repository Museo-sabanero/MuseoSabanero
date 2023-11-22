require('./bootstrap')

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
<<<<<<< HEAD
import { store } from './store/index.js'
=======
import store from './store/index'
>>>>>>> development

createApp(App).use(router).use(store).mount('#app')
