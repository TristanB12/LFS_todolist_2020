<template>
  <div id="app">
    <input class="first-number" v-model="nb1">
    <input class="second-number" v-model="nb2">
    <button @click="addMyNumbers">send</button>
    <div class="result">{{ result }}</div>
  </div>
</template>

<script>

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
      axios.get('http://localhost:3000/todo/add')
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
