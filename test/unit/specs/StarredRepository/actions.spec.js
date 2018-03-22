import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'

Vue.use(Vuex)
describe('Starred repository actions:', () => {
  it('Makes GET request to github readme endpoint and sets result on state', () => {
    store.dispatch('actionGetRepoReadme', { owner: 'someOwner', repo: 'someRepo' }).then((r) => {
      expect(r.body).toEqual({ content: 'base64' })
      expect(store.state.repository.readme).toEqual({ content: atob('base64') })
      expect(store.state.repository.loading).toEqual(false)
    })
  })
})
