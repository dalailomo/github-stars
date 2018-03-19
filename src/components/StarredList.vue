<template>
  <v-card flat v-if="loading" class="profile">
    <v-card-text><Loading /></v-card-text>
  </v-card>
  <v-list two-line v-else-if="items.length > 0">
    <template v-for="(item, index) in items">
      <router-link
        @click.native="selectItem(item)"
        :to="{ name: 'repositoryDetails', params: { username: username, repository: item.name, owner: item.owner.login } }"
        :key="item.id"
      >
        <v-list-tile avatar :key="item.owner.avatar_url" @click="">
          <v-list-tile-avatar>
            <img :src="item.owner.avatar_url">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.full_name"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </router-link>
    </template>
  </v-list>
  <v-card flat v-else>
    <v-card-text>No results :(</v-card-text>
  </v-card>
</template>

<script>
import Loading from './Loading'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Loading,
  },

  computed: {
    ...mapState({
      items: state => state.starredList.items,
      loading: state => state.starredList.loading,
      item: state => state.starredList.currentItem,
      username: state => state.searchForm.username,
    }),
  },

  methods: {
    ...mapActions([
      'actionSetCurrent',
      'actionGetStarred',
    ]),

    selectItem(item) {
      this.actionSetCurrent(item)
    },

    fetchData() {
      if (this.$route.params.username) {
        this.actionGetStarred(this.$route.params.username).then(() => {
          if (!this.$route.params.repository) return

          this.items.forEach(iterationItem => {
            if (this.$route.params.repository === iterationItem.name) {
              this.selectItem(iterationItem)
            }
          })
        }).catch(e => {
          console.log(e)
        })
      }
    },
  },

  watch: {
    '$route'(to, from) {
      if (to.params.username !== from.params.username) {
        this.fetchData()
      }
    },
  },

  mounted() {
    this.fetchData()
  },
}
</script>

<style scoped lang="less">
a {
  color: initial;
  text-decoration: none;
}
</style>

<style>
.router-link-active > div {
  background: #d4f3ff;
}
</style>
