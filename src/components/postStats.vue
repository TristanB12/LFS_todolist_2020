<template>
    <div class="post-stats">
        <div class="likes">
            <img src="../assets/like_before.png" alt="like button" class="like-button">
            <h4>{{ postStats.likes }}</h4>
        </div>
        <div class="shares">
            <img src="../assets/share_before.png" alt="like button" class="share-button">
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
        },
    }
</script>

<style lang="scss" scoped>
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

h4 {
    font-size: 22px;
    color: #576574;
}

</style>