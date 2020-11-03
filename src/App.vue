<template>
  <div id="app">
    <postList :postList="post_list"></postList>
  </div>
</template>

<script>
import postList from '@/components/postList.vue';

export default {
  name: 'App',
  components: {
    postList
  },
  data() {
    return {
      post_list: [
        {
          post_user: {
            username: 'ChrisDiablo12',
            profile_picture: 'chris',
          },
          post_content: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sagittis lacus. Mauris ullamcorper pharetra nulla et tincidunt. Nullam in mauris in metus finibus porttitor. Morbi sit amet ex in tortor semper facilisis. Curabitur ut elit sed nunc vestibulum finibus. Etiam quis blandit eros. Maecenas maximus imperdiet tristique. Nam sit amet mauris quis ipsum rutrum iaculis sed elementum nulla. Donec porttitor tristique ex vitae elementum. Duis egestas porttitor purus, non consectetur nisl accumsan quis.',
            photo: null,
          },
          stats: {
            likes: 521,
            shares: 23,
          }
        },
        {
          post_user: {
            username: 'BradBittxXx',
            profile_picture: 'bradpitt',
          },
          post_content: {
            text: 'LNullam in mauris in metus finibus porttitor. Morbi sit amet ex in tortor semper facilisis. Curabitur ut elit sed nunc vestibulum finibus. Etiam quis blandit eros. Maecenas maximus imperdiet tristique. Nam sit amet mauris quis ipsum rutrum iaculis sed elementum nulla. Donec porttitor tristique ex vitae elementum. Duis egestas porttitor purus, non consectetur nisl accumsan quis.',
            photo: null,
          },
          stats: {
            likes: 20512,
            shares: 2369,
          }
        }
      ]
    }
  },
  methods: {

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.main-title {
  font-size: 70px;
  text-decoration: underline;
}
</style>
