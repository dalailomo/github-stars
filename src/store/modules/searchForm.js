import * as mutation from './../mutation-types'

const state = {
  username: '',
}

const mutations = {
  [mutation.SET_USERNAME_FIELD_VALUE](state, payload) {
    state.username = payload
  },
}

const actions = {
  actionSetUsername: ({ commit }, username) => new Promise((resolve, reject) => {
    commit(mutation.SET_USERNAME_FIELD_VALUE, username)
    resolve()
  }),
}

export default {
  state,
  actions,
  mutations,
}
