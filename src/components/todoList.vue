<template>
    <div class="todo-list">
        <todoItem v-for="item in items" :key="item.id">
            {{ item }}
        </todoItem>
    </div>
</template>

<script>
import todoItem from '@/components/todoItem.vue';
    export default {
        name: 'todoList',
        components: {
            todoItem,
        },
        props: {
            todoArray: {
                type: Object,
                default: () => {},
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>