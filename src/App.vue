<template>
  <v-app id="app">
    <ToolbarElement />
    <v-content>
      <v-container class="mainContainer" fluid fill-height>
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
import ToolbarElement from '@/components/Toolbar'

export default {
  components: {
    ToolbarElement,
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

.mainContainer {
  padding: 0;
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
