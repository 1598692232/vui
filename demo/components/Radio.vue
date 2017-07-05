<template>
    <div>
        <head-top title="Radio" left-url="#/"></head-top>
        <radio-tag></radio-tag>
    </div>
</template>

<style>

</style>

<script>
import headTop from './header'
import RadioTag from '@/components/radiotag'

export default {
    data () {
        return {

        }
    },

    components: {
        RadioTag,
        headTop
    }
}
</script>
