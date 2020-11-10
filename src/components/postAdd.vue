<template>
    <div class="post-add">
        <textarea type="text" v-model="post_text" placeholder="Want to share something ?"></textarea>
        <button @click="addNewPost">Send</button>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'postAdd',
        data() {
            return {
                post_text: ''
            }
        },
        methods: {
            addNewPost() {
                if(this.post_text === '')
                    return;
                const post = {
                    post_user: {
                        username: 'Me',
                        profile_picture: 'chris',
                    },
                    post_content: {
                        text: this.post_text,
                        photo: null,
                    },
                    stats: {
                        likes: 0,
                        shares: 0,
                    },
                    liked: false,
                }
                this.post_text = '';
                axios.post('http://localhost:3000/api/posts/add', post)
                        .then(response => (console.log(response)))
                        .catch(error => (console.log(error)));
            }
        },
    }
</script>

<style lang="css" scoped>
.post-add {
    width: 25%;
    height: 20em;
    margin-top: 20px;
    background-color: #1e272e;
    border: 5px solid #487eb0;
    border-radius: 5px;
    box-shadow: 0px 5px 10px black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

textarea {
    resize: none;
    width: 70%;
    height: 50%;
    margin: auto;
    padding: 10px 15px;
    background-color: #487eb0;
}

textarea::placeholder {
    color: white;
}

button {
    width: 30%;
    margin: auto;
    padding: 10px 10px;
    font-size: 20px;
    background-color: #45aaf2;
    border-radius: 5px;
    text-decoration: none;
    border: 2px solid #45aaf2;
    color: white;
    box-shadow: 0px 0px 6   px #45aaf2;
    outline: none;
    transition-duration: 0.4s;
}

button:hover {
    cursor: pointer;
    background-color: white;
    color: #45aaf2;
}
</style>