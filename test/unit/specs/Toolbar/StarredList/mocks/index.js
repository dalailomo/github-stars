export const emptyState = {
  starredList: {
    items: [],
    currentItem: {},
    loading: false,
  },
}

export const stateWithItems = {
  starredList: {
    items: [
      {
        id: 1,
        'owner': {
          login: 'foo',
          avatar_url: 'url',
        },
        name: 'Foo',
        full_name: 'FooMan',
      },
      {
        id: 2,
        'owner': {
          login: 'foo2',
          avatar_url: 'url2',
        },
        name: 'Foo2',
        full_name: 'FooMan2',
      },
      {
        id: 3,
        'owner': {
          login: 'foo3',
          avatar_url: 'url3',
        },
        name: 'Foo3',
        full_name: 'FooMan3',
      },
    ],
    currentItem: {},
    loading: false,
  },
  searchForm: {
    username: 'Fooman',
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
