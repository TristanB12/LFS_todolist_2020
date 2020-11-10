<template>
    <div id="login-page">
        <div class="login-options">
            <router-link to="/login-page/login">LOG IN</router-link>
            <router-link to="/login-page/signup">SIGN UP</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'loginPage',
    }
</script>

<style lang="css" scoped>
#login-page {
    background-color: white;
    width: 30%;
    margin: auto;
    margin-top: 5%;
    border-radius: 20px;
    box-shadow: 0px 0px 20px #1e272e;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.login-options {
    width: 30%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    padding: 16px 10px;
}

a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    position: relative;
}

a:hover:after {
    content: '';
    position: absolute;
    width: 100%;
    display: block;
    height: 3px;
    background-color: #42aaf4;
}

.router-link-exact-active:after {
    content: '';
    position: absolute;
    width: 100%;
    display: block;
    height: 3px;
    background-color: #42aaf4;
}
</style>