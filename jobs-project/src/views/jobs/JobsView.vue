<template>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
        </router-link>
      </div>
    </div>
    <div v-if="!jobs.length">
      <p>loading...</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
        jobs: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
    .then(response => response.json())
    .then(data => this.jobs = data)
    .catch(error => console.log(error.message))
  }
}
</script>

<style>
  .job h2 {
    background: #f4f4f4;
    padding: 20p;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a {
    text-decoration: none;
  }
</style>