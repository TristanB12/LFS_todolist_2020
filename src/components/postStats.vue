<template>
    <div class="post-stats">
        <div class="likes">
            <img v-if="!likedStatus" src="../assets/like_before.png" alt="like button"
                class="like-button"
                @click="$emit('post-liked')">
            <img v-else src="../assets/like.png" alt="like button"
                class="like-button"
                @click="$emit('post-unliked')">
            <h4>{{ postStats.likes }}</h4>
        </div>
        <div class="shares">
            <img src="../assets/share_before.png" alt="share button"
                class="share-button">
            <h4>{{ postStats.shares }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'postStats',
        props: {
            postStats: {
                type: Object,
                default: () => {},
            },
            likedStatus: {
                type: Boolean,
                default: false,
            }
        },
        methods: {

        },
    }
</script>

<style lang="css" scoped>
.post-stats {
    display: flex;
    justify-content: space-around;
    background-color: #222f3e;
}

.post-stats div {
    display: flex;
}

.post-stats div * {
    margin: 10px;
}

img {
    width: 50px;
    height: 50px;
}

img:hover {
    cursor: pointer;
}

h4 {
    font-size: 22px;
    color: #576574;
}

</style>