<template>
  <div class="home">
    <p>{{ persone1.name }} | {{ persone1.age }}</p>
    <button @click="handleClick1">click</button>
    <p>{{ persone2.name }} | {{ persone2.age }}</p>
    <button @click="handleClick2">click</button>
    <br>
    <input type="text" v-model="search">
    <p v-for="name in matchingNames" :key="name">{{ name }}</p>
    <button @click="stopWatching">stop watching</button>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { ref, reactive, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const persone1 = ref({ name: "asd", age: 30 })
    const persone2 = reactive({ name: "sdf", age: 35 })

    const handleClick1 = () => {
      persone1.value.name = "asd2"
      persone1.value.age = 20
    }

    const handleClick2 = () => {
      persone2.name = "sdf2"
      persone2.age = 20
    }

    const names = ref(["qwe", "wer", "ert"])
    const search = ref('')
    const matchingNames = computed(() => {
      return names.value.filter((name) => {
        return name.includes(search.value)
      })
    })

    const watchFun = watch(search, () => {
      console.log('watch fnc')
    })

    const watchEff = watchEffect(() => {
      console.log('watch eff', search.value)
    })

    const stopWatching = () => {
      watchFun()
      watchEff()
    }

    return { persone1, persone2, handleClick1, handleClick2, names, search, matchingNames, stopWatching }
  }
}
</script>
