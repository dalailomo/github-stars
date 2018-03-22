import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'

Vue.use(Vuex)
describe('User search form actions:', () => {
  it('Sets username', () => {
    store.dispatch('actionSetUsername', 'someUser').then((r) => {
      expect(store.state.searchForm.username).toEqual('someUser')
    })
  })
})
