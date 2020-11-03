<template>
    <div class="post-user">
        <div class="circular-image">
            <img :src="profilePicturePath" alt="profile picture" class="profile-picture">
        </div>
        <h4 class="username"> {{ postUser.username }} </h4>
    </div>
</template>

<script>
    export default {
        name: 'postUser',
        props: {
            postUser: {
                type: Object,
                default: () => {},
            },
        },
        computed: {
            profilePicturePath() {
                if (!this.postUser.profile_picture)
                    return;
                return require(`../assets/${this.postUser.profile_picture}.jpg`);
            }
        },
    }
</script>

<style lang="scss" scoped>

.circular-image {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid black;
}

.profile-picture {
    width: auto;
    height: 100%;
}
</style>