<template>
  <v-card v-if="loading" class="profile">
    Loading...
  </v-card>
  <v-card v-else-if="user.login" class="profile">
    <v-card-media
      class="white--text"
      height="200px"
      :src="user.avatar_url"
    >
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">{{ user.login }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-title>
      <div>
        <span class="grey--text">{{ user.location }}</span><br>
        <span>{{ user.name }}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-spacer />
      <v-btn flat small color="primary" @click="visitUser(user.html_url)">View user page</v-btn>
    </v-card-actions>
  </v-card>
  <v-card v-else class="profile">
    User not found :(
  </v-card>
</template>

<style scoped lang="less">
.profile {
  max-width: 400px;
  min-width: 320px;
}

.headline {
  background: rgba(0, 0, 0, .7);
  padding: 8px;
}
</style>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.githubUser.data,
      loading: state => state.githubUser.loading,
    }),
  },

  methods: {
    ...mapActions([
      'actionGetGithubUser',
    ]),

    visitUser(href) {
      window.open(href, '_blank')
    },

    fetchUser() {
      this.actionGetGithubUser(this.$route.params.username).catch(e => {
        console.log(e)
      })
    },
  },

  watch: {
    '$route'() {
      this.fetchUser()
    },
  },

  mounted() {
    this.fetchUser()
  },
}
</script>
