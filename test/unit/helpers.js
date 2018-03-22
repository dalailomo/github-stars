import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'

export const getWrapper = (component, actions, state, mocks, methods) => {
  let store = new Vuex.Store({
    actions,
    state: state,
  })

  return shallow(component, {
    store,
    mocks,
    methods,
  })
}
