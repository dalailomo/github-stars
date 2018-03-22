import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'

Vue.use(Vuex)
describe('Starred list actions:', () => {
  it('Makes GET request to starred list endpoint and sets result on state', () => {
    store.dispatch('actionGetStarred', 'someUser').then((r) => {
      expect(r.body).toEqual([0, 1, 2, 3, 4, 5])
      expect(store.state.starredList.items).toEqual([0, 1, 2, 3, 4, 5])
      expect(store.state.starredList.loading).toEqual(false)
    })
  })

  it('Sets current item on state', () => {
    store.dispatch('actionSetCurrent', { aProperty: 'this is current item' }).then((r) => {
      expect(store.state.starredList.currentItem).toEqual({ aProperty: 'this is current item' })
      expect(store.state.starredList.loading).toEqual(false)
    })
  })
})
