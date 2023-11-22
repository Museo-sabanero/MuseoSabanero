import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth'

<<<<<<< HEAD
export const store = createStore({
=======
export default createStore({
>>>>>>> development
  plugins: [createPersistedState()],
  modules: {
    auth,
  },
})