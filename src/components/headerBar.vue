<template>
    <div class="header-bar">
        <img src="@/assets/logo.png"/>
        <h1>Share, Discover, Expand your life</h1>
        <router-link to="/login-page">Logout</router-link>
    </div>
</template>

<script>
    export default {
        name: 'headerBar'
    }
</script>

<style lang="css" scoped>
.header-bar {
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    box-shadow: 0px 0px 20px black;
}

img {
    width: 4%;
    border-radius: 50%;
    padding-top: 10px;
    padding-bottom: 10px;
}

.header-bar * {
    margin: auto;
}

a {
    text-decoration: none;
    color: #42aaf2;
    font-weight: bold;
    font-size: 22px;
}

a:hover {
    text-decoration: underline;
}


</style>