import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth'

export const store = createStore({
  plugins: [createPersistedState()],
  modules: {
    auth,
  },
})
