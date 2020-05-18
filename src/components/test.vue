<template>
    <button @click="test">我是插件组件</button>
</template>

<script>
    export default {
        name: "test",
        methods: {
            test () {
                console.log('点击组件')
            }
        }
    }
</script>

<style scoped>

</style>
