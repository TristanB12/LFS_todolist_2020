<template>
    <div class="post-item">
        <postUser :postUser="postItem.post_user"></postUser>
        <postContent :postContent="postItem.post_content"></postContent>
        <postStats :postStats="postItem.stats"></postStats>
    </div>
</template>

<script>
import postUser from '@/components/postUser.vue';
import postContent from '@/components/postContent.vue';
import postStats from '@/components/postStats.vue';

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
    }
</script>

<style lang="scss" scoped>

.post-item {
    border: 5px solid #487eb0;
    width: 35%;
    margin: 10px auto 10px auto;
    border-radius: 15px;
    background-color: #1e272e;
    overflow: hidden;
}
</style>