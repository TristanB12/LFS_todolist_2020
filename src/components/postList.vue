<template>
    <div class="post-list">
        <postItem v-for="item in postList" :key="item.id" :postItem="item"></postItem>
    </div>
</template>

<script>
import postItem from '@/components/postItem.vue';

    export default {
        name: 'postList',
        components: {
            postItem,
        },
        props: {
            postList: {
                type: Array,
                default: () => [],
            },
        },
    }
</script>

<style lang="css" scoped>
.post-list {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
}
</style>