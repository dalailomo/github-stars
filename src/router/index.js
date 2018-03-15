import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserDetails from '@/components/UserDetails'
import RepositoryDetails from '@/components/RepositoryDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details/:username',
      name: 'userDetails',
      component: UserDetails
    },
    {
      path: '/details/:username/starred/:owner/:repository',
      name: 'repositoryDetails',
      component: RepositoryDetails
    }
  ]
})
