<template>
    <div>
        <head-top title="Radio" left-url="#/"></head-top>
        <radio-tag :tags="tags"></radio-tag>
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
            tags: [
                {label: 1, value: 1, template: '<span>1</span>'},
                {label: 2, value: 2, template: '<span>2</span>'},
                {label: 3, value: 3, template: '<span>3</span>'},
                {label: 4, value: 4, template: '<span>4</span>'},
                {label: 5, value: 5, template: '<span>5</span>'},
                {label: 6, value: 6, template: '<span>6</span>'}
            ]
        }
    },

    components: {
        RadioTag,
        headTop
    }
}
</script>
