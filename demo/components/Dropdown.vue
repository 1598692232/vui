<template>
    <div>
        <div style="height:50px;"></div>
        <button v-dropdown="{dropList:list1,dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">adasd</button>
        <div style="height:550px;"></div>
        <button v-dropdown="{dropList:list2,dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: right;margin:0 20px;">adasd</button>
        <div style="height:200px;"></div>
        <button v-dropdown="{dropList:list3,dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">adasd</button>
        <div style="height:50px;"></div>
        <button v-dropdown="{dropList:list4,dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">adasd</button>
        <div>
            <img src="./assets/1.jpg" alt="">
            <div class="img"></div>
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
    export default {
        data() {
            return {
                list1: [1, 2, 3, 4],
                list2: [2, 2, 3, 4],
                list3: [3, 2, 3, 4],
                list4: [4, 2, 3, 4]
            }
        },

        directives: {
            Dropdown
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
