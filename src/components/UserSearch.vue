<template>
  <v-form ref="form" class="searchField" @submit="submit">
    <v-text-field
      name="name"
      label="Github user name"
      :value="username"
      @input="userNameUpdate"
      single-line
    ></v-text-field>
    <v-btn color="green" @click="submit" dark>Search</v-btn>
  </v-form>
</template>

<style scoped lang="less">
.searchField {
  display: flex;
  align-items: baseline;
  padding-top: 16px;
}
</style>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      username: state => state.searchForm.username,
    }),
  },

  methods: {
    ...mapActions([
      'actionSetUsername',
    ]),

    userNameUpdate(value) {
      this.actionSetUsername(value)
    },

    submit(e) {
      e.preventDefault()

      this.$router.push(`/details/${this.username}`)
    },
  },

  watch: {
    '$route'(to, from) {
      if (this.username === to.params.username) return

      this.actionSetUsername(to.params.username)
    },
  },

  mounted() {
    this.actionSetUsername(this.$route.params.username)
  },
}
</script>
