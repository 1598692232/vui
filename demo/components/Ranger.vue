<template>
    <div class="demo">
        <head-top title="Ranger" left-url="#/"></head-top>
        <div style="margin-top:20px">
            <ranger @input="updating" :val="val1"></ranger>
        </div>

        <div style="margin-top:20px">
            <ranger :slider-num="2" :val="val"></ranger>
        </div>
    </div>
</template>
<script>
    import Ranger from '@/components/ranger'
    import headTop from './header'
    export default {
        data() {
            return {
                val: [600, 900],
                val1: 700
            }
        },
        components: {
            Ranger,
            headTop
        },
        methods: {
            updating() {
            }
        }
    }
</script>
