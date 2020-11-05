<template>
    <div class="post-content">
        <p>{{ postContent.text }}</p>
        <img :src="picturePath" alt="">
    </div>
</template>

<script>
    export default {
        name: 'postContent',
        props: {
            postContent: {
                type: Object,
                default: () => {},
            },
        },
        computed: {
            picturePath() {
                if (!this.postContent.photo)
                    return;
                return require(`../assets/${this.postContent.photo}.jpg`);
            }
        },
    }
</script>

<style lang="css" scoped>
p {
    color: #808e9b;
    font-size: 18px;
}
</style>