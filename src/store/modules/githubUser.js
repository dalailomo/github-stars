import api from './../../api'
import * as mutation from './../mutation-types'

const state = {
  data: {},
  loading: false,
}

const mutations = {
  [mutation.SET_GITHUB_USER_OBJECT](state, payload) {
    state.data = payload
  },
  [mutation.IS_LOADING_GITHUB_USER_OBJECT](state, payload) {
    state.loading = payload
  },
}

const actions = {
  actionGetGithubUser: ({ commit }, username) => new Promise((resolve, reject) => {
    const onSuccess = (response) => {
      commit(mutation.SET_GITHUB_USER_OBJECT, response.body)
      commit(mutation.IS_LOADING_GITHUB_USER_OBJECT, false)

      resolve(response)
    }

    const onError = (error) => {
      commit(mutation.SET_GITHUB_USER_OBJECT, {})
      commit(mutation.IS_LOADING_GITHUB_USER_OBJECT, false)
      reject(error)
    }

    commit(mutation.IS_LOADING_GITHUB_USER_OBJECT, true)
    api.getUser(username).then(onSuccess).catch(onError)
  }),
}

export default {
  state,
  actions,
  mutations,
}
