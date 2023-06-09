import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth'

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    auth,
  },
})
