<template>
    <div class="post-add">
        <input type="text" v-model="post_text">
        <button @click="addNewPost">Send</button>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'postAdd',
        data() {
            return {
                post_text: ''
            }
        },
        methods: {
            addNewPost() {
                if(this.post_text === '')
                    return;
                const post = {
                    post_user: {
                        username: 'Me',
                        profile_picture: 'chris',
                    },
                    post_content: {
                        text: this.post_text,
                        photo: null,
                    },
                    stats: {
                        likes: 0,
                        shares: 0,
                    },
                    liked: false,
                }
                this.post_text = '';
                axios.post('http://localhost:3000/api/posts/add', post)
                        .then(response => (console.log(response)))
                        .catch(error => (console.log(error)));
            }
        },
    }
</script>

<style lang="css" scoped>

</style>