import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'

Vue.use(Vuetify)
Vue.use(VueResource)

Vue.config.productionTip = false

let routes = [
  {
    method: 'GET',
    url: '/mockApi/users/someUser/starred',
    response: [0, 1, 2, 3, 4, 5],
  },
  {
    method: 'GET',
    url: '/mockApi/repos/someOwner/someRepo/readme',
    response: { content: 'base64' },
  },
  {
    method: 'GET',
    url: '/mockApi/users/someUser',
    response: 'user object',
  },
]

Vue.http.interceptors.unshift((request, next) => {
  let route = routes.find((item) => {
    return (request.method === item.method && request.url === item.url)
  })

  if (!route) {
    next(request.respondWith({ status: 404 }))
  } else {
    next(
      request.respondWith(
        route.response,
        {status: 200}
      )
    )
  }
})
