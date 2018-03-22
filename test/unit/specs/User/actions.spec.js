import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'

Vue.use(Vuex)
describe('Github user actions:', () => {
  it('Makes GET request to github user endpoint and sets result on state', () => {
    store.dispatch('actionGetGithubUser', 'someUser').then((r) => {
      expect(r.body).toEqual('user object')
      expect(store.state.githubUser.data).toEqual('user object')
      expect(store.state.githubUser.loading).toEqual(false)
    })
  })
})
