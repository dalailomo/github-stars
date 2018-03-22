<template>
  <div>
    <v-navigation-drawer
      floating
      v-model="drawer"
      app
    >
      <StarredList />
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon :disabled="items.length < 1" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><UserSearch /></v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StarredList from '@/components/Toolbar/StarredList'
import UserSearch from '@/components/Toolbar/UserSearchForm'

export default {
  components: {
    StarredList,
    UserSearch,
  },

  computed: {
    ...mapState({
      items: state => state.starredList.items,
    }),
  },

  data: () => ({
    drawer: false,
  }),

  props: {
    source: {
      required: false,
      type: String,
      default: '',
    },
  },
}
</script>
