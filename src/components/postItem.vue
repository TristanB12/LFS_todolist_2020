<template>
    <div class="post-item">
        <postUser :postUser="postItem.post_user"></postUser>
    </div>
</template>

<script>
import postUser from '@/components/postUser.vue';

    export default {
        name: 'postItem',
        components: {
            postUser,
        },
        props: {
            postItem: {
                type: Object,
                default: () => {}
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>