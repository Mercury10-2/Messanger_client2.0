import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth
    },
    state: {
        //user: null,         //  !!
        users: null,
        query: 'all-time'
    },
    mutations: {
        loggedIn(state, user) {
            state.user = user
        },
        logout(state) {
            state.user = null
        },
        setQuery(state, query) {
            state.query = query
        },
        allUsers(state, users) {
            state.users = users
        }
    }
})