<template>
  <div class="container">
    <div>
      <h1>Goal of Mattrax</h1>
      <p>The goal of Mattrax is to make a simple to use, yet advanced Mobile Device Management server that allows a single policy to be enforced across all of your organisations devices no matter the operating system.</p> 
      <br />

      <h2>Development Progress</h2>
      <p>Mattrax has a functional dashboard and MDM component although security is lacking and policies can't yet be scoped to a device or deployed via MDM.</p> 
      <img src="/screenshots/dashboard.png" alt="Mattrax Dashboard Home Page" width="80%"></img>
      <br>
      <q>Mattrax Dashboard Home Page</q>
      <br />
      <br />

      <h2>Contributing</h2>
      <p>If you are interested in helping develop Mattrax yourself, join the Slack community. Mattrax is built using <a href="https://golang.org/" target="_blank" rel="noreferrer">Go</a> and <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js</a>.</p> 
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
}
</style>
