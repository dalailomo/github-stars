export const emptyState = {
  githubUser: {
    data: {},
    loading: false,
  },
}

export const stateWithUser = {
  githubUser: {
    data: {
      login: 'foo',
      avatar_url: 'url',
      location: 'foo',
      name: 'Foo',
      html_url: 'url',
    },
    loading: false,
  },
}

export const mocks = {
  '$route': {
    path: '',
    params: {
      username: 'someUser',
    },
  },
}
