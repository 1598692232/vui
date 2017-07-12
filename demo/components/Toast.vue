<template>
    <div>
        <head-top title="Toast" left-url="#/"></head-top>
        <div style="padding-top:0.2rem;text-align: center">
            <button @click="showToast" class="v-btn">显示toast</button>
        </div>
    </div>
</template>
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
