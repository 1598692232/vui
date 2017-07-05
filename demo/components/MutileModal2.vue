<template>
    <div>
        <button @click="hide()">close</button>
    </div>
</template>
<style>

</style>
<script>
    import $managerModal from '@/components/modal/index.js'
    export default {
        data() {
            return {
                list: [1, 2, 3, 4]
            }
        },

        methods: {

            hide() {
                console.log($managerModal.modalVMArgs, 94949)
                $managerModal.destroy(1)
            }
        }
    }
</script>
