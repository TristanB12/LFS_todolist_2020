<template>
    <div class="post-item">
        <postUser :postUser="postItem.post_user"></postUser>
        <postContent :postContent="postItem.post_content"></postContent>
        <postStats :postStats="postItem.stats" :likedStatus="postItem.liked"
                    @post-liked="likeThisPost"
                    @post-unliked="unlikeThisPost" ></postStats>
    </div>
</template>

<script>
import postUser from '@/components/postUser.vue';
import postContent from '@/components/postContent.vue';
import postStats from '@/components/postStats.vue';
import axios from 'axios'

    export default {
        name: 'postItem',
        components: {
            postUser,
            postContent,
            postStats,
        },
        props: {
            postItem: {
                type: Object,
                default: () => {},
            },
        },
        methods: {
            likeThisPost() {
                axios.post('http://localhost:3000/api/posts/like', {
                    id: this.postItem._id,
                    stats: {
                        likes: this.postItem.stats.likes + 1,
                        shares: this.postItem.stats.shares,
                    },
                })
                .then(response => console.log(response))
                .catch(error => console.log(error));
            },
            unlikeThisPost() {
                axios.post('http://localhost:3000/api/posts/unlike', {
                    id: this.postItem._id,
                    stats: {
                        likes: this.postItem.stats.likes - 1,
                        shares: this.postItem.stats.shares,
                    },
                })
                .then(response => console.log(response))
                .catch(error => console.log(error));
            }
        },
    }
</script>

<style lang="css" scoped>

.post-item {
    border: 5px solid #487eb0;
    width: 35%;
    margin: 10px auto 10px auto;
    border-radius: 15px;
    background-color: #1e272e;
    overflow: hidden;
}
</style>