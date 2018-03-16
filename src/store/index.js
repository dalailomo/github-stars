import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import githubUser from './modules/githubUser'
import searchForm from './modules/searchForm'
import starredList from './modules/starredList'
import repository from './modules/repository'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  modules: {
    githubUser,
    searchForm,
    starredList,
    repository,
  },
  strict: true,
})
