<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <br>

    <div v-if="showModal">
      <Modal :header="header" :text="text" :theme="theme" @close="toggleModal" >
        <template v-slot:links>
          <a href="#">sign up</a>
          <a href="#">info</a>
        </template>
        <h2>template</h2>
        <p>slot</p>
      </Modal>
    </div>

    <div v-if="showModalTwo">
      <Modal :header="header" :text="text" @close="toggleModalTwo" >
        <h2>template two</h2>
        <p>slot two</p>
      </Modal>
    </div>

    <button @click.alt="toggleModal">opne modal (alt)</button>
    <button @click.alt="toggleModalTwo">opne modal two (alt)</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data () {
    return {
      title: 'My first Vue App',
      header: 'header prop',
      text: 'text prop',
      theme: 'sale',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick () {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal () {
      this.showModal = !this.showModal
    },
    toggleModalTwo () {
      this.showModalTwo = !this.showModalTwo
    }
  }
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
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
