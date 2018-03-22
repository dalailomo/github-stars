import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import StarredRepository from '@/components/StarredRepository'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user/:username',
      name: 'userDetails',
      component: User,
    },
    {
      path: '/user/:username/starred-repository/:owner/:repository',
      name: 'repositoryDetails',
      component: StarredRepository,
    },
  ],
})
