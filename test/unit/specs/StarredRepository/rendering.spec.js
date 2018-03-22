import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import StarredRepository from '@/components/StarredRepository'
import { getWrapper } from './../../helpers'
import { emptyState, stateWithRepository, mocks } from './mocks'

Vue.use(Vuex)
Vue.use(Vuetify)

describe('Starred repository rendering', () => {
  const actions = {
    actionGetRepoReadme: jest.fn(),
  }

  const methods = {
    processLinksOnReadmeContent: jest.fn(),
  }

  it('Renders repository data', () => {
    const wrapper = getWrapper(StarredRepository, actions, stateWithRepository, mocks, {
      processLinksOnReadmeContent: jest.fn(),
    })

    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })

  it('Renders no data', () => {
    const wrapper = getWrapper(StarredRepository, actions, emptyState, mocks, methods)

    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })
})
