import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Toolbar from '@/components/Toolbar'
import { getWrapper } from './../../helpers'
import { emptyState, stateWithItems } from './mocks'

Vue.use(Vuex)
Vue.use(Vuetify)

describe('Toolbar rendering', () => {
  it('Renders toolbar with disabled drawer when there are no items', () => {
    const wrapper = getWrapper(Toolbar, {}, emptyState, {}, {})

    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })

  it('Renders toolbar with enabled drawer when there are items', () => {
    const wrapper = getWrapper(Toolbar, {}, stateWithItems, {}, {})

    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })
})
