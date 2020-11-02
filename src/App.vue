<template>
  <div id="app">
    <input class="first-number" v-model="nb1">
    <input class="second-number" v-model="nb2">
    <button @click="addMyNumbers">send</button>
    <div class="result">{{ result }}</div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      nb1: 0,
      nb2: 0,
      result: 0,
    }
  },
  methods: {
    addMyNumbers() {
      axios.post('http://localhost:3000/todo/add', {
        a: parseInt(this.nb1, 10),
        b: parseInt(this.nb2, 10),
      })
      .then(response => {
        this.result = response.data.add;
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-title {
  font-size: 70px;
  text-decoration: underline;
}
</style>
