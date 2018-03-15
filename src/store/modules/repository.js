import api from './../../api'
import * as mutation from './../mutation-types'

const state = {
  readme: {},
  loading: false
}

const mutations = {
  [mutation.SET_REPOSITORY_README] (state, payload) {
    state.readme = payload
  },
  [mutation.IS_LOADING_README] (state, payload) {
    state.loading = payload
  }
}

const actions = {
  actionGetRepoReadme: ({ commit }, params) => new Promise((resolve, reject) => {
    const onSuccess = (response) => {
      commit(mutation.SET_REPOSITORY_README, {content: atob(response.body.content)})
      commit(mutation.IS_LOADING_README, false)

      resolve(response)
    }

    const onError = (error) => {
      reject(error)
    }

    commit(mutation.IS_LOADING_README, true)
    api.getRepoReadme(params).then(onSuccess).catch(onError)
  })
}

export default {
  state,
  actions,
  mutations
}
