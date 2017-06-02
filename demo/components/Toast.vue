<template>
    <div>
        <button @click="showToast">显示toast</button>
    </div>
</template>
<style>

</style>
<script>
    import Toast from '@/components/toast/index'
    export default {
      methods: {
        showToast() {
          Toast.show('mammamamam', 2000)
        }
      }
    }
</script>
