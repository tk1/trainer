<template>
  <div>
    <h1>{{title}}</h1>
  
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
export default {
  name: 'answers',
  data() {
    return {
      title: 'Answer History',
      items: [
        {
          id: 1,
          text: 'first answer',
          createdAt: new Date()
        },
        {
          id: 2,
          text: 'second answer',
          createdAt: new Date()
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
