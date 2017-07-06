<template>
    <div class="demo">
        <head-top title="Ranger" left-url="#/"></head-top>
        <div style="margin-top:20px">
            <ranger @input="updating" :val="val1" :range="[100,1000]"></ranger>
        </div>

        <div style="margin-top:20px">
            <ranger :slider-num="2" :val="val" :range="[500,10000]" ref="r2"></ranger>
        </div>
    </div>
</template>
<script>
    import Ranger from '@/components/ranger'
    import headTop from './header'
    export default {
        data() {
            return {
                val: [500, 10000],
                val1: 700
            }
        },
        components: {
            Ranger,
            headTop
        },
        mounted() {
            setTimeout(() => {
                this.val = [1000, 2000]
            }, 1000)
        },
        methods: {
            updating() {

            }
        }
    }
</script>
