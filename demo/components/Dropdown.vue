<template>
    <div>
        <head-top title="Dropdown" left-url="#/"></head-top>
        <div style="margin-top:100px;">
            <div style="height:50px;"></div>
            <button v-dropdown="{dropList:list1,dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">drop1</button>
            <div style="height:550px;"></div>
            <button v-dropdown="{dropList:list2,dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: right;margin:0 20px;">drop2</button>
            <div style="height:200px;"></div>
            <button v-dropdown="{dropList:list3,dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">drop3</button>
            <div style="height:50px;"></div>
            <button v-dropdown="{dropList:list4,dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">drop4</button>
        </div>

    </div>
</template>
<style>
    .img{
        width:200px;
        height:100px;
        background-image: url('./assets//1.jpg');
    }
</style>
<script>
    import Dropdown from '@/components/dropdown/index.js'
    import headTop from './header'
    export default {
        data() {
            return {
                list1: [1, 2, 3, 4],
                list2: [1, 2, 3, 4],
                list3: [3, 2, 3, 4],
                list4: [4, 2, 3, 4]
            }
        },

        directives: {
            Dropdown
        },

        components: {
            headTop
        },

        methods: {
            dataFormatter(item, index) {
                console.log('dateformatter')
                return `<div>${item}${item}${item}${item}${item}${item}${item}</div>`
            },

            dropClick(item, index) {
                console.log(item, index, '66666')
            },

            render() {
                console.log('已经render了')
            }
        }
    }
</script>
