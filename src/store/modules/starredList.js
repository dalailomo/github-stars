import api from './../../api'
import * as mutation from './../mutation-types'

const state = {
  items: [],
  currentItem: {},
  loading: false,
}

const mutations = {
  [mutation.SET_STARRED_LIST](state, payload) {
    state.items = payload
  },
  [mutation.SET_ACTIVE_REPOSITORY](state, payload) {
    state.currentItem = payload
  },
  [mutation.IS_LOADING_STARRED_LIST](state, payload) {
    state.loading = payload
  },
}

const actions = {
  actionGetStarred: ({ commit }, user) => new Promise((resolve, reject) => {
    const onSuccess = (response) => {
      commit(mutation.SET_STARRED_LIST, response.body)
      commit(mutation.IS_LOADING_STARRED_LIST, false)

      resolve(response)
    }

    const onError = (error) => {
      commit(mutation.IS_LOADING_STARRED_LIST, false)
      reject(error)
    }

    commit(mutation.IS_LOADING_STARRED_LIST, true)
    api.getStarred(user).then(onSuccess).catch(onError)
  }),

  actionSetCurrent: ({ commit }, item) => new Promise((resolve, reject) => {
    commit(mutation.SET_ACTIVE_REPOSITORY, item)
    resolve()
  }),
}

export default {
  state,
  actions,
  mutations,
}
