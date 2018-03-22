export const emptyState = {
  searchForm: {
    username: '',
  },
}

export const stateWithUsername = {
  searchForm: {
    username: 'Fooman',
  },
}

export const mocks = {
  '$route': {
    path: '/',
    params: {
      username: 'someUser',
    },
  },
}
