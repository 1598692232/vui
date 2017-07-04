<template>
    <div>
        <head-top title="Ranger" left-url="#/"></head-top>
        <button @click="showToast">显示toast</button>
    </div>
</template>
<style>

</style>
<script>
    import Toast from '@/components/toast/index'
    import headTop from './header'
    export default {
        components: {
            headTop
        },

        methods: {
            showToast() {
                Toast.show('mammamamam', 2000)
            }
        }
    }
</script>
