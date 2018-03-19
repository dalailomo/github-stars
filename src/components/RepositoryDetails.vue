<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <v-card class="summary" v-if="loadingStarred">
          <v-card-text>Loading...</v-card-text>
        </v-card>
        <v-card class="summary" v-else-if="item.owner">
          <v-card-media :src="item.owner.avatar_url" height="100px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.name }}</h3>
              <p>Author: <big>{{ item.owner.login }}</big></p>
              <p v-if="item.license">License: <big>{{ item.license.key }} ({{ item.license.name }})</big></p>
              <p>Language: <big>{{ item.language }}</big></p>
            </div>
          </v-card-title>

          <v-divider />

          <v-card-text class="stats">
            <div><v-icon small>star</v-icon> {{ item.stargazers_count }}</div>
            <div><v-icon small>visibility</v-icon> {{ item.watchers_count }}</div>
            <div><v-icon small>call_split</v-icon> {{ item.forks_count }}</div>
            <div><v-icon small>info_outline</v-icon> {{ item.open_issues_count }}</div>
          </v-card-text>

          <v-divider />

          <v-card-text class="description">
            <p v-if="item.description">{{ item.description }}</p>
            <p v-else><i>No description</i></p>
          </v-card-text>

          <v-card-actions>
            <v-btn flat small color="primary" @click="visitRepository(item.html_url)">Repository</v-btn>
            <v-spacer />
            <v-btn flat small color="green" @click="changeUser(item.owner.login)">Author stars</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm8>
        <v-card class="readme" v-if="loading">
          <v-card-text>Loading...</v-card-text>
        </v-card>
        <v-card class="readme" ref="readmeRef" v-else>
          <v-card-text>
            <vue-markdown v-if="readme.content" :source="readme.content" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="less">
p {
  margin: 4px 0;
}

.action {
  color: #1976d2;
  text-decoration: underline;
  cursor: pointer;
}

.summary {
  margin: auto;

  position: sticky;
  top: 71px;
}

.stats {
  display: flex;
  justify-content: center;

  & > div {
    padding: 0 6px;
  }
}

.layout {
  max-width: 975px;
  margin: auto;
}

.readme {
  max-width: calc(100vw - 16px);
  line-height: 1.8em;
  overflow-x: auto;

  h1, h2, h3, h4, h5 {
    padding: .5em 0;
    margin: .8em 0;
    white-space: normal;
  }

  ul, ol {
    padding: 0 1em;
  }

  h1, h2 {
    border-bottom: 1px solid #d3d3d3;
  }

  code {
    box-shadow: 0 0 0 #000000;
  }

  img {
    max-width: 100%;
  }

  pre {
    overflow-x: auto;
    background: #eee;
    padding: 6px;

    code {
      padding: 6px;
      background: #eee;
      white-space: inherit;
    }
  }
}

</style>

<script>
import { mapState, mapActions } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown,
  },

  computed: {
    ...mapState({
      item: state => state.starredList.currentItem,
      loadingStarred: state => state.starredList.loading,
      readme: state => state.repository.readme,
      loading: state => state.repository.loading,
    }),
  },

  methods: {
    ...mapActions([
      'actionGetRepoReadme',
    ]),

    changeUser(user) {
      this.$router.push({ name: 'userDetails', params: { username: user } })
    },

    visitRepository(href) {
      window.open(href, '_blank')
    },

    fetchReadme() {
      this.actionGetRepoReadme({
        owner: this.$route.params.owner,
        repo: this.$route.params.repository,
      }).catch(e => {
        console.log(e)
      })
    },

    processLinksOnReadmeContent() {
      const listener = (e) => {
        e.preventDefault()
        const href = e.target.getAttribute('href')

        if (!href) return

        var r = new RegExp('^(?:[a-z]+:)?//', 'i')

        if (r.test(href)) {
          window.open(href, '_blank')
        } else {
          // TODO notification that is a relative link and cant be open (use notification component)
        }
      }

      this.$refs.readmeRef.$el.removeEventListener('click', listener, false)
      this.$refs.readmeRef.$el.addEventListener('click', listener, false)
    },
  },

  watch: {
    '$route'() {
      this.fetchReadme()
    },
  },

  mounted() {
    this.fetchReadme()
    this.processLinksOnReadmeContent()
  },
}
</script>
