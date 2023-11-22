import axios from 'axios'
import router from '../router'

export default {
  namespaced: true,
  state: {
    authenticated: false,
    user: {},
  },
  getters: {
    authenticated(state) {
      return state.authenticated
    },
    user(state) {
      return state.user
    },
  },
  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value
    },
    SET_USER(state, value) {
      state.user = value
    },
  },
  actions: {
<<<<<<< HEAD
    login({ commit }, data) {
      commit('SET_USER', data)
      commit('SET_AUTHENTICATED', true)
=======
    async login({ commit }) {
      try {
        const { data } = await axios.get('/api/user')
        console.log(data)
        commit('SET_USER', data)
        commit('SET_AUTHENTICATED', true)
        router.push({ name: 'dashboard' })
      } catch (error) {
        commit('SET_USER', {})
        commit('SET_AUTHENTICATED', false)
      }
>>>>>>> development
    },
    logout({ commit }) {
      commit('SET_USER', {})
      commit('SET_AUTHENTICATED', false)
    },
  },
}
