import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import StarredList from '@/components/Toolbar/StarredList'
import { getWrapper } from './../../../helpers'
import { emptyState, stateWithItems, mocks } from './mocks'

Vue.use(Vuex)
Vue.use(Vuetify)

describe('Starred list component rendering', () => {
  const actions = {
    actionGetStarred: jest.fn(),
    actionSetCurrent: jest.fn(),
  }

  it('Renders list with no results', () => {
    const wrapper = getWrapper(StarredList, actions, emptyState, mocks)

    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })

  it('Renders list with some results', () => {
    const wrapper = getWrapper(StarredList, actions, stateWithItems, mocks)

    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })
})
