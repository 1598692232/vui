<template>
    <div style="padding-top:0.2rem;text-align: center">
        <button @click="hide()" class="v-btn">CLOSE MODAL2</button>
    </div>
</template>

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
