import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import UserSearchForm from '@/components/Toolbar/UserSearchForm'
import { getWrapper } from './../../../helpers'
import { emptyState, mocks } from './mocks'

Vue.use(Vuex)
Vue.use(Vuetify)

describe('User search form rendering', () => {
  const actions = {
    actionSetUsername: jest.fn(),
  }

  it('Renders form', () => {
    const wrapper = getWrapper(UserSearchForm, actions, emptyState, mocks, {})

    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })
})
