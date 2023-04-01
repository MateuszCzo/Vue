<template>
    <div v-if="error">{{ error }}</div>
    <div v-else class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
</template>

<script>
import getPost from '../composables/getPost.js';

export default {
    props: ['id'],
    setup(props) {
        const { error, post, load } = getPost(props.id)
        load()
        return { error, post }
    }
}
</script>