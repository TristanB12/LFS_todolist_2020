<template>
    <div class="main-page">
        <headerBar></headerBar>
        <div class="body-page">
            <postList :postList="post_list"></postList>
            <postAdd></postAdd>
        </div>
            <button @click="resetDataBase">reset data base</button>
    </div>
</template>

<script>
import postList from "@/components/postList.vue";
import postAdd from "@/components/postAdd.vue";
import headerBar from '@/components/headerBar.vue';
import axios from "axios";

export default {
    name: "mainPage",
    components: {
    postList,
    postAdd,
    headerBar,
    },
    data() {
    return {
        post_list: []
    };
    },
    methods: {
    getPosts() {
        axios
        .get("http://localhost:3000/api/posts")
        .then(response => (this.post_list = response.data.posts))
        .catch(error => console.log(error));
    },
    resetDataBase() {
        axios
        .get("http://localhost:3000/api/posts/reset")
        .then(response => console.log(response))
        .catch(error => console.log(error));
        this.post_list = [];
    }
    },
    created() {
        this.getPosts();
    },

    beforeUpdate() {
        this.getPosts();
    }
};
</script>

<style>
html, body {
    margin:0px;
}

.body-page {
    display: flex;
    justify-content: space-evenly;
}
</style>
