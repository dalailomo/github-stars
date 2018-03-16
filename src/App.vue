<template>
  <v-app id="app">
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
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import StarredList from './components/StarredList'
import UserSearch from './components/UserSearch'

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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.content {
  width: 100vw;
  color: #fff;
  background: linear-gradient(-45deg, #EE7752, #e66195, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  -webkit-animation: Gradient 35s ease infinite;
  -moz-animation: Gradient 35s ease infinite;
  animation: Gradient 35s ease infinite;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}
</style>
