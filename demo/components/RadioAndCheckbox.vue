<template>
    <div>
        <head-top title="RadioOrCheckbox" left-url="#/"></head-top>
        <div style="padding:0 0.15rem;margin-top:0.8rem">
            <div class="v-span">最多选三个(checkbox)</div>
            <checkbox-tag :tags="tags" @error="handleSelect" :max-number="3"></checkbox-tag>
            <div class="v-span">单选（radio）</div>
            <checkbox-tag :tags="tags2" @error="handleSelect" :max-number="1"></checkbox-tag>
        </div>
    </div>
</template>

<style>
.v-span{
    width:100%;
    line-height:0.3rem;
    text-align: center;
    color:#666;
    font-size: 0.13rem
}
</style>

<script>
import headTop from './header'
import CheckboxTag from '@/components/radiocheckboxtag'

export default {
    data () {
        return {
            tags: [
                {label: 1, value: 1, template: '<span>1</span>', selected: true},
                {label: 2, value: 2, template: '<span>2</span>'},
                {label: 3, value: 3, template: '<span>3</span>'},
                {label: 4, value: 4, template: '<span>4</span>'},
                {label: 5, value: 5, template: '<span>5</span>'},
                {label: 6, value: 6, template: '<span>6</span>'}
            ],
            tags2: [
                {label: 1, value: 1, template: '<span>1</span>', selected: true},
                {label: 2, value: 2, template: '<span>2</span>'},
                {label: 3, value: 3, template: '<span>3</span>'},
                {label: 4, value: 4, template: '<span>4</span>'},
                {label: 5, value: 5, template: '<span>5</span>'},
                {label: 6, value: 6, template: '<span>6</span>'}
            ]
        }
    },

    components: {
        CheckboxTag,
        headTop
    },

    methods: {
        handleSelect () {
            alert('超出个数')
        }
    }
}
</script>
