import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import User from '@/components/User'
import { getWrapper } from './../../helpers'
import { emptyState, stateWithUser, mocks } from './mocks'

Vue.use(Vuex)
Vue.use(Vuetify)

describe('User rendering', () => {
  const actions = {
    actionGetGithubUser: jest.fn(),
  }

  it('Renders that there is no user', () => {
    const wrapper = getWrapper(User, actions, emptyState, mocks, {})

    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })

  it('Renders user details', () => {
    const wrapper = getWrapper(User, actions, stateWithUser, mocks, {})

    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })
})
