<template>
    <div class="login">
        <img src="@/assets/user-logo.png" alt="user logo">
        <input type="text" placeholder="Username" v-model="username_input"/>
        <input class ="password" type="password" placeholder="Password" v-model="password_input"/>
        <p class="error-message" v-if="!identifers_valid">Username or password are invalid</p>
        <button v-if="can_login" @click="checkIdentifiers">Log in</button>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'login',
        data() {
            return {
                username_input: '',
                password_input: '',
                identifers_valid: true,
                can_login: false,
            }
        },
        methods: {
            canLoginButtonAppear() {
                if(this.username_input != '' && this.password_input != '')
                    this.can_login = true;
                else
                    this.can_login = false;
            },
            login(response) {
                if(response.data.exist == null)
                    this.identifers_valid = false;
                else
                    this.$router.push({path: `/home-page/:${this.username_input}`});
            },
            checkIdentifiers() {
                axios.post('http://localhost:3000/api/user-connexion/login', {
                    username: this.username_input,
                    password: this.password_input,
                })
                .then(response => this.login(response))
                .catch(error => console.log(error));
            }
        },
        beforeUpdate () {
            this.canLoginButtonAppear();
        },
    }
</script>

<style lang="css" scoped>
.login {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

img {
    width: 200px;
    margin: auto;
    margin-bottom: 10px;
    display: block;
}

input {
    width: 70%;
    margin: auto;
    margin-top: 15px;
    padding: 10px 10px;
    text-align: center;
    font-size: 26px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #f1f2f6;
    border: 2px solid #f1f2f6;
    outline: none;
    color: #57606f;
}

.error-message {
    margin: auto;
    margin-top: 10px;
    color: red;
}

.password {
    margin-bottom: 20px ;
}

input:focus::placeholder {
    color: transparent;
}

button {
    width: 40%;
    margin: auto;
    margin-bottom: 30px;
    padding: 10px 10px;
    font-size: 26px;
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