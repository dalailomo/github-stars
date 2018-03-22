export const emptyState = {
  repository: {
    readme: {},
    loading: false,
  },
  starredList: {
    currentItem: {},
    loading: false,
  },
}

export const stateWithRepository = {
  repository: {
    readme: {},
    loading: false,
  },
  starredList: {
    currentItem: {
      id: 1,
      'owner': {
        login: 'foo',
        avatar_url: 'url',
      },
      name: 'Foo',
      full_name: 'FooMan',
      description: 'Foodesc',
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
