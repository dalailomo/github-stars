import Vue from 'vue'
import Home from '@/components/Home'

describe('Home page component', () => {
  it('Should render home page', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Github stars')

    expect(vm.$el.querySelector('h2').textContent)
      .toEqual('Start browsing starred repositories from Github users')
  })
})
