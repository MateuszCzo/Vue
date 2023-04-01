<template>
  <div class="home">
    <h1>home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <button @click="() => showPosts=!showPosts">toggle posts</button>
    <button @click="() => posts.pop()">delete post</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts.js'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const showPosts = ref(true)
    const { posts, error, load } = getPosts()

    load()
    
    return { posts, showPosts, error }
  }
}
</script>
