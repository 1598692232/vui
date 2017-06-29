<template>
    <div class="demo">
        <div style="margin-top:20px">
            <ranger @input="updating" :val="val1"></ranger>
        </div>

        <div style="margin-top:20px">
            <ranger :slider-num="2" :val="val"></ranger>
        </div>
    </div>
</template>
<style>
    .demo {
        padding:0 15px;
    }
</style>
<script>
    import Ranger from '@/components/ranger'
    export default {
        data() {
            return {
                val: [600, 900],
                val1: 700
            }
        },
        components: {
            Ranger
        },
        methods: {
            updating() {
            }
        }
    }
</script>
