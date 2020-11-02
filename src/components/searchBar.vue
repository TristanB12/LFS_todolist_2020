<template>
    <div>
        <input  class="search-bar" type="text" autofocus
                v-model="input_string"
                @keyup.enter="sendInputString">
    </div>
</template>

<script>
    export default {
        name: 'searchBar',
        data() {
            return {
                input_string: '',
            }
        },
        methods: {
            sendInputString() {
                this.$emit('key-enter-pressed', this.input_string);
                this.input_string = '';
            }
        },
    }
</script>

<style lang="scss" scoped>
.search-bar {
    width: 12%;
    padding: 12px 20px;
    font-size: 20px;
    outline: none;
}
</style>