<template>
  <div>
    <h1>{{title}}</h1>
    <p v-if="error">An error occurred: {{error}}</p>
  
    <table class="table table-striped">
      <thead>
        <tr>
          <td>Timestamp</td>
          <td>Answer</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" v-bind:key="item.id">
          <td>{{item.createdAt | formatDateTime}}</td>
          <td>{{item.text}}</td>
        </tr>
      </tbody>
    </table>
  
  </div>
</template>

<script>
import axios from 'axios'
import { bus } from '../bus.js'

export default {
  name: 'answers',
  data() {
    return {
      title: 'Answer History',
      error: null,
      items: []
    }
  },
  created() {
    this.fetchData()
    bus.$on('new-answer', this.newAnswer)
  },
  methods: {
    fetchData() {
      var that = this
      that.error = null
      var url = '/api/answers'
      axios.get(url)
        .then(function (response) {
          that.items = response.data
        })
        .catch(function (error) {
          that.error = error.toString()
        })
    },
    newAnswer(answer) {
      this.items.push(answer)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
