<template>
    <div class="login">
        <img src="@/assets/user-logo.png" alt="user logo">
        <input type="text" placeholder="Username" v-model="username_input"/>
        <input class ="password" type="password" placeholder="Password" v-model="password_input"/>
        <button v-if="can_login">Log in</button>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                username_input: '',
                password_input: '',
                can_login: false,
            }
        },
        methods: {
            canLogin() {
                if(this.username_input != '' && this.password_input != '')
                    this.can_login = true;
                else
                    this.can_login = false;
            }
        },
        beforeUpdate () {
            this.canLogin();
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