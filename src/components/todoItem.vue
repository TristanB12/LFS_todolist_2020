<template>
    <div class="todo-item">
        <div class="content">{{ todo }}</div>
    </div>
</template>

<script>
    export default {
        name: 'todoitem',
        props: {
            item: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>