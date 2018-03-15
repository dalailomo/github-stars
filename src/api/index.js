import Vue from 'vue'

const getApiEndpoint = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://api.github.com'
    case 'development':
      return 'https://api.github.com'
    default:
      return '/mockApi'
  }
}

const endpoint = getApiEndpoint()

export default {
  getStarred (user) {
    return Vue.http.get(`${endpoint}/users/${user}/starred`)
  },
  getRepoReadme (params) {
    return Vue.http.get(`${endpoint}/repos/${params.owner}/${params.repo}/readme`)
  },
  getUser (user) {
    return Vue.http.get(`${endpoint}/users/${user}`)
  }
}
