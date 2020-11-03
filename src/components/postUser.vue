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
    margin-right: 8px;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid #40739e;
}

.profile-picture {
    width: auto;
    height: 100%;
}

.post-user {
    display: flex;
    margin: 5px;
}

.post-user h4 {
    color: #d2dae2;
}

.post-user h4:hover {
    text-decoration: underline #d2dae2;
    cursor: pointer;
}

</style>